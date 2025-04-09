#!/usr/bin/env node
import { ApiPromise, WsProvider } from '@polkadot/api';
import * as fs from 'fs';
import * as path from 'path';

// Network configuration
const WS_ENDPOINT = 'wss://test-dashboard.kylix.finance';
const OUTPUT_FILE = path.join(process.cwd(), 'src/types/runtime-calls-types.ts');

// List of standard pallets to optionally filter out if they lack call decoration.
const standardPallets = ['System', 'Timestamp', 'Grandpa', 'Balances', 'Sudo'];

/**
 * Map a Polkadot runtime type string from metadata into a TypeScript type.
 */
function mapRuntimeTypeToTsType(type) {
  if (!type) return 'unknown';

  if (type.includes('<') && type.includes('>')) {
    const baseType = type.substring(0, type.indexOf('<')).toLowerCase();
    const inner = type.substring(type.indexOf('<') + 1, type.lastIndexOf('>')).trim();
    switch (baseType) {
      case 'vec':
      case 'option':
        return `${mapRuntimeTypeToTsType(inner)}[]`;
      case 'tuple': {
        const tupleTypes = inner.split(',').map(t => mapRuntimeTypeToTsType(t.trim()));
        return `[${tupleTypes.join(', ')}]`;
      }
      default:
        return `${baseType}<${mapRuntimeTypeToTsType(inner)}>`;
    }
  }

  switch (type.toLowerCase()) {
    case 'u8': case 'u16': case 'u32': case 'u64': case 'u128':
    case 'i8': case 'i16': case 'i32': case 'i64': case 'i128':
    case 'number': case 'integer': case 'f32': case 'f64':
      return 'number';
    case 'bool': case 'boolean':
      return 'boolean';
    case 'string': case 'text': case 'blockhash': case 'accountid': 
    case 'hash': case 'h256':
      return 'string';
    case 'bytes':
      return 'Uint8Array';
    case 'balance':
      return 'string';
    default:
      return 'unknown';
  }
}

/**
 * Utility to join documentation strings.
 */
function cleanDoc(doc) {
  if (Array.isArray(doc)) {
    return doc.map(line => line.trim()).join('\n   * ');
  }
  return (doc || '').trim();
}

/**
 * Capitalizes the first letter.
 */
function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

/**
 * Generates TypeScript definitions for runtime calls.
 */
async function generateRuntimeCallsTypes() {
  console.log(`Connecting to ${WS_ENDPOINT}...`);
  const provider = new WsProvider(WS_ENDPOINT);
  const api = await ApiPromise.create({ provider });

  try {
    console.log('Connected! Extracting runtime modules and calls...');
    const metadata = await api.rpc.state.getMetadata();
    const pallets = metadata.asLatest.pallets;

    let typeDefinitions = `// Auto-generated TypeScript definitions for Polkadot runtime calls
// Generated on: ${new Date().toISOString()}
// Source: ${WS_ENDPOINT}

import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';

/**
 * Base interface for runtime call methods.
 */
export interface RuntimeCall<T = any> {
  signAndSend: (account: string | object, options?: any) => Promise<ISubmittableResult>;
}

`;

    // Process pallets. Only include those NOT in the standardPallets list.
    for (const pallet of pallets) {
      const moduleName = pallet.name.toString();
      // Optionally skip standard pallets.
      if (standardPallets.includes(moduleName)) continue;

      if (!pallet.calls || pallet.calls.isNone) continue;

      typeDefinitions += `// ${moduleName} module runtime calls\n`;
      typeDefinitions += `export namespace ${moduleName} {\n`;

      const rawCalls = pallet.calls.unwrap().toJSON();
      const calls = Array.isArray(rawCalls) ? rawCalls : Object.values(rawCalls);

      for (let i = 0; i < calls.length; i++) {
        const call = calls[i];
        let callName = call.name;
        if (!callName) {
          callName = `Call${i + 1}`;
          console.warn(`Warning: A call in module ${moduleName} is missing a name. Using fallback "${callName}".`);
        }
        const paramsInterfaceName = `${capitalize(callName)}Params`;
        const docString = cleanDoc(call.documentation);

        typeDefinitions += `  /**\n`;
        typeDefinitions += `   * ${docString || `${callName} call`}\n`;
        typeDefinitions += `   */\n`;

        if (call.args && call.args.length > 0) {
          typeDefinitions += `  export interface ${paramsInterfaceName} {\n`;
          for (const param of call.args) {
            const paramName = param.name || 'param';
            const paramType = mapRuntimeTypeToTsType(param.type);
            typeDefinitions += `    /** ${param.name || ''} ${param.type || ''} */\n`;
            typeDefinitions += `    ${paramName}: ${paramType};\n`;
          }
          typeDefinitions += `  }\n\n`;
        } else {
          typeDefinitions += `  // No parameters for ${callName}\n`;
          typeDefinitions += `  export type ${paramsInterfaceName} = {};\n\n`;
        }
        const paramsType = (call.args && call.args.length > 0) ? paramsInterfaceName : '{}';
        typeDefinitions += `  export type ${capitalize(callName)}Call = (params: ${paramsType}) => SubmittableExtrinsic<'promise', ISubmittableResult>;\n\n`;
      }

      typeDefinitions += `  export interface ModuleCalls {\n`;
      for (let i = 0; i < calls.length; i++) {
        let callName = calls[i].name;
        if (!callName) callName = `Call${i + 1}`;
        typeDefinitions += `    ${callName}: ${capitalize(callName)}Call;\n`;
      }
      typeDefinitions += `  }\n`;
      typeDefinitions += `}\n\n`;
    }

    typeDefinitions += `// Complete Runtime Interface\n`;
    typeDefinitions += `export interface Runtime {\n`;
    pallets.forEach(pallet => {
      const moduleName = pallet.name.toString();
      if (standardPallets.includes(moduleName)) return;
      if (!pallet.calls || pallet.calls.isNone) return;
      typeDefinitions += `  ${moduleName}: ${moduleName}.ModuleCalls;\n`;
    });
    typeDefinitions += `}\n`;

    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(OUTPUT_FILE, typeDefinitions);
    console.log(`TypeScript definitions generated successfully at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating runtime call types:', error);
  } finally {
    await provider.disconnect();
    console.log('Disconnected from provider');
  }
}

generateRuntimeCallsTypes();

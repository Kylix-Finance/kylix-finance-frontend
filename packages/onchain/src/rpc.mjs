#!/usr/bin/env node
import { ApiPromise, WsProvider } from '@polkadot/api';
import { } from '@polkadot/api/util';
import * as fs from 'fs';
import * as path from 'path';

// Network configuration
const WS_ENDPOINT = 'wss://test-dashboard.kylix.finance';
const OUTPUT_FILE = path.join(process.cwd(), 'src/types/rpc-types.ts');

// Utility function to convert param type to TypeScript type
function mapParamTypeToTsType(type) {
    switch (type.toLowerCase()) {
        case 'string':
            return 'string';
        case 'number':
        case 'integer':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'object':
            return 'Record<string, unknown>';
        case 'array':
            return 'unknown[]';
        case 'hash':
        case 'h256':
            return 'string'; // Hashes are typically represented as hex strings
        case 'blockhash':
            return 'string';
        case 'accountid':
            return 'string';
        case 'balance':
            return 'string'; // For large numbers, we use string to avoid precision loss
        default:
            return 'unknown';
    }
}

// Generate TypeScript types for RPC methods
async function generateRpcTypes() {
    console.log(`Connecting to ${WS_ENDPOINT}...`);

    const provider = new WsProvider(WS_ENDPOINT);
    const api = await ApiPromise.create({ provider });

    try {
        console.log('Connected! Extracting RPC methods...');

        // Get all RPC methods from the API
        const rpcMethods = api.call;
        const sections = Object.keys(rpcMethods);

        let typeDefinitions = `// Auto-generated TypeScript definitions for Polkadot RPC methods
// Generated on: ${new Date().toISOString()}
// Source: ${WS_ENDPOINT}

`;

        // For storing custom types we need to define
        const customTypes = new Set();

        // Iterate through each RPC section
        for (const section of sections) {
            if (section === 'author' || section === 'chain' || section === 'state' || section === 'system') {
                // Skip standard sections (we only want custom RPCs)
                continue;
            }

            const methods = Object.getOwnPropertyNames(rpcMethods[section])
                .filter(name => !name.startsWith('_') && typeof rpcMethods[section][name] === 'function');

            if (methods.length === 0) continue;

            typeDefinitions += `// ${section} RPC methods\n`;
            typeDefinitions += `export namespace ${section}Rpc {\n`;

            // Process each method in the section
            for (const methodName of methods) {
                try {
                    // Get the method definition
                    const method = rpcMethods[section][methodName];
                    const methodInfo = method.meta || { documentation: '', params: [], type: 'unknown' };

                    // Extract param info
                    const params = methodInfo.params || [];

                    // Create interface for method parameters
                    typeDefinitions += `  /**\n`;
                    if (methodInfo.documentation && methodInfo.documentation.length > 0) {
                        const docs = Array.isArray(methodInfo.documentation)
                            ? methodInfo.documentation.join('\n   * ')
                            : methodInfo.documentation;
                        typeDefinitions += `   * ${docs}\n`;
                    }
                    typeDefinitions += `   */\n`;

                    // Create parameter types
                    if (params.length > 0) {
                        typeDefinitions += `  export interface ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params {\n`;
                        for (const param of params) {
                            const paramName = param.name || 'param';
                            const paramType = mapParamTypeToTsType(param.type || 'unknown');

                            typeDefinitions += `    /** ${param.name || ''} ${param.type || ''} */\n`;
                            typeDefinitions += `    ${paramName}: ${paramType};\n`;
                        }
                        typeDefinitions += `  }\n\n`;
                    }

                    // Create return type
                    const returnType = mapParamTypeToTsType(methodInfo.type || 'unknown');
                    typeDefinitions += `  export type ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Result = ${returnType};\n\n`;
                } catch (err) {
                    console.warn(`Error processing method ${section}.${methodName}:`, err);
                    typeDefinitions += `  // Error processing ${methodName}\n\n`;
                }
            }

            typeDefinitions += `}\n\n`;
        }

        // Add a type for the entire RPC interface
        typeDefinitions += `// Complete RPC interface\nexport interface RpcInterface {\n`;
        for (const section of sections) {
            if (section === 'author' || section === 'chain' || section === 'state' || section === 'system') {
                continue;
            }

            const methods = Object.getOwnPropertyNames(rpcMethods[section])
                .filter(name => !name.startsWith('_') && typeof rpcMethods[section][name] === 'function');

            if (methods.length === 0) continue;

            typeDefinitions += `  ${section}: {\n`;
            for (const methodName of methods) {
                try {
                    const method = rpcMethods[section][methodName];
                    const methodInfo = method.meta || { params: [], type: 'unknown' };
                    const params = methodInfo.params || [];

                    const paramTypes = params.length > 0
                        ? `${section}Rpc.${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params`
                        : '{}';
                    const returnType = `Promise<${section}Rpc.${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Result>`;

                    typeDefinitions += `    ${methodName}: (params: ${paramTypes}) => ${returnType};\n`;
                } catch (err) {
                    console.warn(`Error processing method ${section}.${methodName} for interface:`, err);
                    typeDefinitions += `    // Error processing ${methodName}\n`;
                }
            }
            typeDefinitions += `  };\n`;
        }
        typeDefinitions += `}\n`;

        // Write the type definitions to a file
        const outputDir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, typeDefinitions);
        console.log(`TypeScript definitions generated successfully at ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Error generating RPC types:', error);
    } finally {
        // Disconnect from the provider
        await provider.disconnect();
        console.log('Disconnected from provider');
    }
}

// Execute the function
generateRpcTypes()
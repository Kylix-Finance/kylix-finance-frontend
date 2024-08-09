// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/storage";

import type {
  AugmentedQuery,
  QueryableStorageEntry,
} from "@polkadot/api-base/types";
import type {
  Bytes,
  Compact,
  Enum,
  Null,
  Option,
  Struct,
  U8aFixed,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec";
import type { AnyNumber, ITuple } from "@polkadot/types-codec/types";
import type { AccountId32, H256 } from "@polkadot/types/interfaces/runtime";
import type { Observable } from "@polkadot/types/types";

export interface PalletAssetsAssetAccount extends Struct {
  readonly balance: u128;
  readonly status: PalletAssetsAccountStatus;
  readonly reason: PalletAssetsExistenceReason;
  readonly extra: Null;
}
export interface PalletTransactionPaymentReleases extends Enum {
  readonly isV1Ancient: boolean;
  readonly isV2: boolean;
  readonly type: "V1Ancient" | "V2";
}
export interface PalletAssetsAccountStatus extends Enum {
  readonly isLiquid: boolean;
  readonly isFrozen: boolean;
  readonly isBlocked: boolean;
  readonly type: "Liquid" | "Frozen" | "Blocked";
}
export interface PalletAssetsApproval extends Struct {
  readonly amount: u128;
  readonly deposit: u128;
}
export interface PalletAssetsExistenceReason extends Enum {
  readonly isConsumer: boolean;
  readonly isSufficient: boolean;
  readonly isDepositHeld: boolean;
  readonly asDepositHeld: u128;
  readonly isDepositRefunded: boolean;
  readonly isDepositFrom: boolean;
  readonly asDepositFrom: ITuple<[AccountId32, u128]>;
  readonly type:
    | "Consumer"
    | "Sufficient"
    | "DepositHeld"
    | "DepositRefunded"
    | "DepositFrom";
}
export interface PalletAssetsAssetDetails extends Struct {
  readonly owner: AccountId32;
  readonly issuer: AccountId32;
  readonly admin: AccountId32;
  readonly freezer: AccountId32;
  readonly supply: u128;
  readonly deposit: u128;
  readonly minBalance: u128;
  readonly isSufficient: bool;
  readonly accounts: u32;
  readonly sufficients: u32;
  readonly approvals: u32;
  readonly status: PalletAssetsAssetStatus;
}
export interface PalletAssetsAssetStatus extends Enum {
  readonly isLive: boolean;
  readonly isFrozen: boolean;
  readonly isDestroying: boolean;
  readonly type: "Live" | "Frozen" | "Destroying";
}
export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}
export interface PalletAssetsAssetMetadata extends Struct {
  readonly deposit: u128;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly isFrozen: bool;
}
export interface PalletBalancesAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly frozen: u128;
  readonly flags: u128;
}
export interface PalletBalancesReserveData extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}
export interface PalletBalancesReasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
  readonly type: "Fee" | "Misc" | "All";
}
export interface PalletBalancesBalanceLock extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
  readonly reasons: PalletBalancesReasons;
}

export interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
  readonly normal: SpWeightsWeightV2Weight;
  readonly operational: SpWeightsWeightV2Weight;
  readonly mandatory: SpWeightsWeightV2Weight;
}
export interface SpWeightsWeightV2Weight extends Struct {
  readonly refTime: Compact<u64>;
  readonly proofSize: Compact<u64>;
}
export interface FrameSystemAccountInfo extends Struct {
  readonly nonce: u32;
  readonly consumers: u32;
  readonly providers: u32;
  readonly sufficients: u32;
  readonly data: PalletBalancesAccountData;
}

export interface SpRuntimeDigest extends Struct {
  readonly logs: Vec<SpRuntimeDigestDigestItem>;
}
export interface SpRuntimeDigestDigestItem extends Enum {
  readonly isOther: boolean;
  readonly asOther: Bytes;
  readonly isConsensus: boolean;
  readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
  readonly isSeal: boolean;
  readonly asSeal: ITuple<[U8aFixed, Bytes]>;
  readonly isPreRuntime: boolean;
  readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
  readonly isRuntimeEnvironmentUpdated: boolean;
  readonly type:
    | "Other"
    | "Consensus"
    | "Seal"
    | "PreRuntime"
    | "RuntimeEnvironmentUpdated";
}
export interface FrameSystemPhase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
  readonly type: "ApplyExtrinsic" | "Finalization" | "Initialization";
}
export interface FrameSystemEventRecord extends Struct {
  readonly phase: FrameSystemPhase;
  readonly event: Event;
  readonly topics: Vec<H256>;
}
export interface PalletBalancesIdAmount extends Struct {
  readonly id: Null;
  readonly amount: u128;
}

export interface LendingLendingPool {
  id: number;
  lendTokenId: number;
  reserveBalance: number;
  borrowedBalance: number;
  activated: boolean;
  interestModel: {
    baseRate: number;
    slope1: number;
    slope2: number;
    kink: number;
  };
  reserveFactor: string;
  exchangeRate: string;
  collateralFactor: string;
  liquidationThreshold: string;
  borrowRate: string;
  supplyRate: string;
  lastAccruedInterestAt: number;
  borrowIndex: number;
  supplyIndex: number;
}

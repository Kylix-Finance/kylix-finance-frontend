// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
//@ts-nocheck
//@ts-ignore
//@ts-expect-error error
// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/lookup";

import type {
  Bytes,
  Compact,
  Enum,
  Null,
  Option,
  Result,
  Struct,
  Text,
  U8aFixed,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type {
  AccountId32,
  Call,
  H256,
  MultiAddress,
  Perbill,
} from "@polkadot/types/interfaces/runtime";
import type { Event } from "@polkadot/types/interfaces/system";

declare module "@polkadot/types/lookup" {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
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

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type:
      | "ExtrinsicSuccess"
      | "ExtrinsicFailed"
      | "CodeUpdated"
      | "NewAccount"
      | "KilledAccount"
      | "Remarked";
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: "Normal" | "Operational" | "Mandatory";
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: "Yes" | "No";
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type:
      | "Other"
      | "CannotLookup"
      | "BadOrigin"
      | "Module"
      | "ConsumerRemaining"
      | "NoProviders"
      | "TooManyConsumers"
      | "Token"
      | "Arithmetic"
      | "Transactional"
      | "Exhausted"
      | "Corruption"
      | "Unavailable"
      | "RootNotAllowed";
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type:
      | "FundsUnavailable"
      | "OnlyProvider"
      | "BelowMinimum"
      | "CannotCreate"
      | "UnknownAsset"
      | "Frozen"
      | "Unsupported"
      | "CannotCreateHold"
      | "NotExpendable"
      | "Blocked";
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: "Underflow" | "Overflow" | "DivisionByZero";
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: "LimitReached" | "NoLayer";
  }

  /** @name PalletGrandpaEvent (30) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: "NewAuthorities" | "Paused" | "Resumed";
  }

  /** @name SpConsensusGrandpaAppPublic (33) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (34) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (35) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type:
      | "Endowed"
      | "DustLost"
      | "Transfer"
      | "BalanceSet"
      | "Reserved"
      | "Unreserved"
      | "ReserveRepatriated"
      | "Deposit"
      | "Withdraw"
      | "Slashed"
      | "Minted"
      | "Burned"
      | "Suspended"
      | "Restored"
      | "Upgraded"
      | "Issued"
      | "Rescinded"
      | "Locked"
      | "Unlocked"
      | "Frozen"
      | "Thawed";
  }

  /** @name FrameSupportTokensMiscBalanceStatus (36) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: "Free" | "Reserved";
  }

  /** @name PalletTransactionPaymentEvent (37) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: "TransactionFeePaid";
  }

  /** @name PalletSudoEvent (38) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: "Sudid" | "KeyChanged" | "SudoAsDone";
  }

  /** @name PalletAssetsEvent (42) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetMinBalanceChanged: boolean;
    readonly asAssetMinBalanceChanged: {
      readonly assetId: u32;
      readonly newMinBalance: u128;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly depositor: AccountId32;
    } & Struct;
    readonly isBlocked: boolean;
    readonly asBlocked: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type:
      | "Created"
      | "Issued"
      | "Transferred"
      | "Burned"
      | "TeamChanged"
      | "OwnerChanged"
      | "Frozen"
      | "Thawed"
      | "AssetFrozen"
      | "AssetThawed"
      | "AccountsDestroyed"
      | "ApprovalsDestroyed"
      | "DestructionStarted"
      | "Destroyed"
      | "ForceCreated"
      | "MetadataSet"
      | "MetadataCleared"
      | "ApprovedTransfer"
      | "ApprovalCancelled"
      | "TransferredApproved"
      | "AssetStatusChanged"
      | "AssetMinBalanceChanged"
      | "Touched"
      | "Blocked";
  }

  /** @name LendingEvent (44) */
  interface LendingEvent extends Enum {
    readonly isLiquiditySupplied: boolean;
    readonly asLiquiditySupplied: {
      readonly who: AccountId32;
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isLiquidityWithdrawn: boolean;
    readonly asLiquidityWithdrawn: {
      readonly who: AccountId32;
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isBorrowed: boolean;
    readonly asBorrowed: {
      readonly who: AccountId32;
      readonly borrowedAssetId: u32;
      readonly borrowedBalance: u128;
    } & Struct;
    readonly isRepaid: boolean;
    readonly asRepaid: {
      readonly who: AccountId32;
      readonly repaidAssetId: u32;
      readonly repaidBalance: u128;
    } & Struct;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: {
      readonly who: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isLendingPoolAdded: boolean;
    readonly asLendingPoolAdded: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isLendingPoolRemoved: boolean;
    readonly asLendingPoolRemoved: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isLendingPoolActivated: boolean;
    readonly asLendingPoolActivated: {
      readonly asset: u32;
    } & Struct;
    readonly isLendingPoolDeactivated: boolean;
    readonly asLendingPoolDeactivated: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isLendingPoolRateModelUpdated: boolean;
    readonly asLendingPoolRateModelUpdated: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isLpTokenMinted: boolean;
    readonly asLpTokenMinted: {
      readonly who: AccountId32;
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isAssetPriceAdded: boolean;
    readonly asAssetPriceAdded: {
      readonly asset: u32;
      readonly baseAsset: u32;
      readonly price: u128;
    } & Struct;
    readonly isEnabledAsCollateral: boolean;
    readonly asEnabledAsCollateral: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isDisabledAsCollateral: boolean;
    readonly asDisabledAsCollateral: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isBaseAsset: boolean;
    readonly asBaseAsset: {
      readonly asset: u32;
    } & Struct;
    readonly isLiquidationMarketCreated: boolean;
    readonly asLiquidationMarketCreated: {
      readonly asset: u32;
    } & Struct;
    readonly isLiquidationMarketDeleted: boolean;
    readonly asLiquidationMarketDeleted: {
      readonly asset: u32;
    } & Struct;
    readonly isBidAsset: boolean;
    readonly asBidAsset: {
      readonly asset: u32;
    } & Struct;
    readonly isBidPlaced: boolean;
    readonly asBidPlaced: {
      readonly who: AccountId32;
      readonly asset: u32;
      readonly discount: u8;
      readonly balance: u128;
    } & Struct;
    readonly isBidRemoved: boolean;
    readonly asBidRemoved: {
      readonly who: AccountId32;
      readonly asset: u32;
    } & Struct;
    readonly isLiquidated: boolean;
    readonly asLiquidated: {
      readonly borrower: AccountId32;
    } & Struct;
    readonly isBorrowerLiquidated: boolean;
    readonly asBorrowerLiquidated: {
      readonly borrower: AccountId32;
      readonly collaterals: Vec<ITuple<[u32, u128]>>;
      readonly borrows: Vec<ITuple<[u32, u128]>>;
    } & Struct;
    readonly isCollateralDiscountUpdated: boolean;
    readonly asCollateralDiscountUpdated: {
      readonly asset: u32;
      readonly discounts: Bytes;
    } & Struct;
    readonly isLiquidationMarketActivated: boolean;
    readonly asLiquidationMarketActivated: {
      readonly asset: u32;
    } & Struct;
    readonly isLiquidationMarketDeactivated: boolean;
    readonly asLiquidationMarketDeactivated: {
      readonly asset: u32;
    } & Struct;
    readonly isCollateralSold: boolean;
    readonly asCollateralSold: {
      readonly asset: u32;
      readonly amount: u128;
      readonly paymentAssetId: u32;
      readonly paidAmount: u128;
      readonly discountPercent: u8;
      readonly buyer: AccountId32;
    } & Struct;
    readonly isDummySwap: boolean;
    readonly asDummySwap: {
      readonly fromAsset: u32;
      readonly fromAmount: u128;
      readonly toAsset: u32;
      readonly toAmount: u128;
    } & Struct;
    readonly type:
      | "LiquiditySupplied"
      | "LiquidityWithdrawn"
      | "Borrowed"
      | "Repaid"
      | "RewardsClaimed"
      | "LendingPoolAdded"
      | "LendingPoolRemoved"
      | "LendingPoolActivated"
      | "LendingPoolDeactivated"
      | "LendingPoolRateModelUpdated"
      | "LpTokenMinted"
      | "AssetPriceAdded"
      | "EnabledAsCollateral"
      | "DisabledAsCollateral"
      | "BaseAsset"
      | "LiquidationMarketCreated"
      | "LiquidationMarketDeleted"
      | "BidAsset"
      | "BidPlaced"
      | "BidRemoved"
      | "Liquidated"
      | "BorrowerLiquidated"
      | "CollateralDiscountUpdated"
      | "LiquidationMarketActivated"
      | "LiquidationMarketDeactivated"
      | "CollateralSold"
      | "DummySwap";
  }

  /** @name FrameSystemPhase (48) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: "ApplyExtrinsic" | "Finalization" | "Initialization";
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (52) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (55) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type:
      | "Remark"
      | "SetHeapPages"
      | "SetCode"
      | "SetCodeWithoutChecks"
      | "SetStorage"
      | "KillStorage"
      | "KillPrefix"
      | "RemarkWithEvent";
  }

  /** @name FrameSystemLimitsBlockWeights (59) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (60) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (61) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (63) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (64) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (65) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (66) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (72) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type:
      | "InvalidSpecName"
      | "SpecVersionNeedsToIncrease"
      | "FailedToExtractRuntimeVersion"
      | "NonDefaultComposite"
      | "NonZeroRefCount"
      | "CallFiltered";
  }

  /** @name PalletTimestampCall (73) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: "Set";
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (75) */
  interface SpConsensusAuraSr25519AppSr25519Public
    extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (76) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (79) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: "Live" | "PendingPause" | "Paused" | "PendingResume";
  }

  /** @name PalletGrandpaStoredPendingChange (80) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (83) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type:
      | "ReportEquivocation"
      | "ReportEquivocationUnsigned"
      | "NoteStalled";
  }

  /** @name SpConsensusGrandpaEquivocationProof (84) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (85) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: "Prevote" | "Precommit";
  }

  /** @name FinalityGrandpaEquivocationPrevote (86) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<
      [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]
    >;
    readonly second: ITuple<
      [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]
    >;
  }

  /** @name FinalityGrandpaPrevote (87) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpConsensusGrandpaAppSignature (88) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (89) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (92) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<
      [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]
    >;
    readonly second: ITuple<
      [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]
    >;
  }

  /** @name FinalityGrandpaPrecommit (93) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (95) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (96) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type:
      | "PauseFailed"
      | "ResumeFailed"
      | "ChangePending"
      | "TooSoon"
      | "InvalidKeyOwnershipProof"
      | "InvalidEquivocationProof"
      | "DuplicateOffenceReport";
  }

  /** @name PalletBalancesBalanceLock (98) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (99) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: "Fee" | "Misc" | "All";
  }

  /** @name PalletBalancesReserveData (102) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesIdAmount (105) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesCall (107) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type:
      | "TransferAllowDeath"
      | "SetBalanceDeprecated"
      | "ForceTransfer"
      | "TransferKeepAlive"
      | "TransferAll"
      | "ForceUnreserve"
      | "UpgradeAccounts"
      | "Transfer"
      | "ForceSetBalance";
  }

  /** @name PalletBalancesError (113) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type:
      | "VestingBalance"
      | "LiquidityRestrictions"
      | "InsufficientBalance"
      | "ExistentialDeposit"
      | "Expendability"
      | "ExistingVestingSchedule"
      | "DeadAccount"
      | "TooManyReserves"
      | "TooManyHolds"
      | "TooManyFreezes";
  }

  /** @name PalletTransactionPaymentReleases (114) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: "V1Ancient" | "V2";
  }

  /** @name PalletSudoCall (115) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: "Sudo" | "SudoUncheckedWeight" | "SetKey" | "SudoAs";
  }

  /** @name PalletAssetsCall (117) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly isSetMinBalance: boolean;
    readonly asSetMinBalance: {
      readonly id: Compact<u32>;
      readonly minBalance: u128;
    } & Struct;
    readonly isTouchOther: boolean;
    readonly asTouchOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRefundOther: boolean;
    readonly asRefundOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isBlock: boolean;
    readonly asBlock: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly type:
      | "Create"
      | "ForceCreate"
      | "StartDestroy"
      | "DestroyAccounts"
      | "DestroyApprovals"
      | "FinishDestroy"
      | "Mint"
      | "Burn"
      | "Transfer"
      | "TransferKeepAlive"
      | "ForceTransfer"
      | "Freeze"
      | "Thaw"
      | "FreezeAsset"
      | "ThawAsset"
      | "TransferOwnership"
      | "SetTeam"
      | "SetMetadata"
      | "ClearMetadata"
      | "ForceSetMetadata"
      | "ForceClearMetadata"
      | "ForceAssetStatus"
      | "ApproveTransfer"
      | "CancelApproval"
      | "ForceCancelApproval"
      | "TransferApproved"
      | "Touch"
      | "Refund"
      | "SetMinBalance"
      | "TouchOther"
      | "RefundOther"
      | "Block";
  }

  /** @name LendingCall (118) */
  interface LendingCall extends Enum {
    readonly isCreateLendingPool: boolean;
    readonly asCreateLendingPool: {
      readonly id: u32;
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isActivateLendingPool: boolean;
    readonly asActivateLendingPool: {
      readonly asset: u32;
    } & Struct;
    readonly isSupply: boolean;
    readonly asSupply: {
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isWithdrawAll: boolean;
    readonly asWithdrawAll: {
      readonly asset: u32;
    } & Struct;
    readonly isBorrow: boolean;
    readonly asBorrow: {
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isRepay: boolean;
    readonly asRepay: {
      readonly asset: u32;
      readonly balance: u128;
    } & Struct;
    readonly isRepayAll: boolean;
    readonly asRepayAll: {
      readonly asset: u32;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly balance: u128;
    } & Struct;
    readonly isDeactivateLendingPool: boolean;
    readonly asDeactivateLendingPool: {
      readonly asset: u32;
    } & Struct;
    readonly isUpdatePoolRateModel: boolean;
    readonly asUpdatePoolRateModel: {
      readonly asset: u32;
    } & Struct;
    readonly isSetAssetPrice: boolean;
    readonly asSetAssetPrice: {
      readonly asset: u32;
      readonly baseAsset: u32;
      readonly price: u128;
    } & Struct;
    readonly isEnableAsCollateral: boolean;
    readonly asEnableAsCollateral: {
      readonly asset: u32;
    } & Struct;
    readonly isDisableAsCollateral: boolean;
    readonly asDisableAsCollateral: {
      readonly asset: u32;
    } & Struct;
    readonly isUpdateBaseAsset: boolean;
    readonly asUpdateBaseAsset: {
      readonly asset: u32;
    } & Struct;
    readonly isPlaceBid: boolean;
    readonly asPlaceBid: {
      readonly asset: u32;
      readonly discount: u8;
      readonly balance: u128;
    } & Struct;
    readonly isCancelBid: boolean;
    readonly asCancelBid: {
      readonly asset: u32;
      readonly discount: u8;
      readonly index: u32;
      readonly blocknumber: u32;
    } & Struct;
    readonly isLiquidate: boolean;
    readonly asLiquidate: {
      readonly borrower: AccountId32;
    } & Struct;
    readonly isUpdateCollateralDiscounts: boolean;
    readonly asUpdateCollateralDiscounts: {
      readonly asset: u32;
      readonly discounts: Bytes;
    } & Struct;
    readonly isExecuteMarket: boolean;
    readonly asExecuteMarket: {
      readonly assets: Vec<u32>;
    } & Struct;
    readonly isRepayLiquidatedDebt: boolean;
    readonly asRepayLiquidatedDebt: {
      readonly asset: u32;
    } & Struct;
    readonly isUpdateBidAsset: boolean;
    readonly asUpdateBidAsset: {
      readonly asset: u32;
    } & Struct;
    readonly isCreateLiquidationMarket: boolean;
    readonly asCreateLiquidationMarket: {
      readonly asset: u32;
    } & Struct;
    readonly isDeleteLiquidationMarket: boolean;
    readonly asDeleteLiquidationMarket: {
      readonly asset: u32;
    } & Struct;
    readonly isActivateLiquidationMarket: boolean;
    readonly asActivateLiquidationMarket: {
      readonly asset: u32;
    } & Struct;
    readonly isDeactivateLiquidationMarket: boolean;
    readonly asDeactivateLiquidationMarket: {
      readonly asset: u32;
    } & Struct;
    readonly type:
      | "CreateLendingPool"
      | "ActivateLendingPool"
      | "Supply"
      | "Withdraw"
      | "WithdrawAll"
      | "Borrow"
      | "Repay"
      | "RepayAll"
      | "ClaimRewards"
      | "DeactivateLendingPool"
      | "UpdatePoolRateModel"
      | "SetAssetPrice"
      | "EnableAsCollateral"
      | "DisableAsCollateral"
      | "UpdateBaseAsset"
      | "PlaceBid"
      | "CancelBid"
      | "Liquidate"
      | "UpdateCollateralDiscounts"
      | "ExecuteMarket"
      | "RepayLiquidatedDebt"
      | "UpdateBidAsset"
      | "CreateLiquidationMarket"
      | "DeleteLiquidationMarket"
      | "ActivateLiquidationMarket"
      | "DeactivateLiquidationMarket";
  }

  /** @name PalletSudoError (120) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: "RequireSudo";
  }

  /** @name PalletAssetsAssetDetails (121) */
  interface PalletAssetsAssetDetails extends Struct {
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

  /** @name PalletAssetsAssetStatus (122) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: "Live" | "Frozen" | "Destroying";
  }

  /** @name PalletAssetsAssetAccount (124) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly status: PalletAssetsAccountStatus;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsAccountStatus (125) */
  interface PalletAssetsAccountStatus extends Enum {
    readonly isLiquid: boolean;
    readonly isFrozen: boolean;
    readonly isBlocked: boolean;
    readonly type: "Liquid" | "Frozen" | "Blocked";
  }

  /** @name PalletAssetsExistenceReason (126) */
  interface PalletAssetsExistenceReason extends Enum {
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

  /** @name PalletAssetsApproval (128) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (129) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (131) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isUnavailableConsumer: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly isCallbackFailed: boolean;
    readonly type:
      | "BalanceLow"
      | "NoAccount"
      | "NoPermission"
      | "Unknown"
      | "Frozen"
      | "InUse"
      | "BadWitness"
      | "MinBalanceZero"
      | "UnavailableConsumer"
      | "BadMetadata"
      | "Unapproved"
      | "WouldDie"
      | "AlreadyExists"
      | "NoDeposit"
      | "WouldBurn"
      | "LiveAsset"
      | "AssetNotLive"
      | "IncorrectStatus"
      | "NotFrozen"
      | "CallbackFailed";
  }

  /** @name LendingLendingPool (132) */
  interface LendingLendingPool extends Struct {
    readonly id: u32;
    readonly lendTokenId: u32;
    readonly reserveBalance: u128;
    readonly borrowedBalance: u128;
    readonly activated: bool;
    readonly interestModel: LendingInterestRateInterestRateModel;
    readonly reserveFactor: Perbill;
    readonly exchangeRate: Perbill;
    readonly collateralFactor: Perbill;
    readonly liquidationThreshold: Perbill;
    readonly borrowRate: Perbill;
    readonly supplyRate: Perbill;
    readonly lastAccruedInterestAt: u64;
    readonly borrowIndex: u128;
    readonly supplyIndex: u128;
    readonly liquidation: LendingCollateralLiquidationLiquidation;
  }

  /** @name LendingInterestRateInterestRateModel (133) */
  interface LendingInterestRateInterestRateModel extends Struct {
    readonly y0: u128;
    readonly y1: u128;
    readonly xm: u128;
    readonly ym: u128;
  }

  /** @name LendingCollateralLiquidationLiquidation (135) */
  interface LendingCollateralLiquidationLiquidation extends Struct {
    readonly totalCollateral: u128;
    readonly totalDebt: u128;
  }

  /** @name LendingBorrowRepayUserBorrow (137) */
  interface LendingBorrowRepayUserBorrow extends Struct {
    readonly borrowedAsset: u32;
    readonly borrowedBalance: u128;
    readonly borrowIndex: u128;
    readonly lastAccruedInterestAt: u64;
  }

  /** @name LendingDepositsDepositPosition (140) */
  interface LendingDepositsDepositPosition extends Struct {
    readonly depositAsset: u32;
  }

  /** @name LendingCollateralLiquidationBid (145) */
  interface LendingCollateralLiquidationBid extends Struct {
    readonly bidder: AccountId32;
    readonly amount: u128;
    readonly discount: u8;
    readonly blocknumber: u32;
    readonly index: u32;
    readonly filledAmount: u128;
    readonly status: LendingCollateralLiquidationBidStatus;
  }

  /** @name LendingCollateralLiquidationBidStatus (146) */
  interface LendingCollateralLiquidationBidStatus extends Enum {
    readonly isActive: boolean;
    readonly isPartiallyFilled: boolean;
    readonly isFulfilled: boolean;
    readonly isCancelled: boolean;
    readonly type: "Active" | "PartiallyFilled" | "Fulfilled" | "Cancelled";
  }

  /** @name LendingCollateralLiquidationLiquidationMarketConfig (150) */
  interface LendingCollateralLiquidationLiquidationMarketConfig extends Struct {
    readonly discounts: Bytes;
    readonly isActive: bool;
  }

  /** @name FrameSupportPalletId (152) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name LendingError (153) */
  interface LendingError extends Enum {
    readonly isLendingPoolDoesNotExist: boolean;
    readonly isLendingPoolAlreadyExists: boolean;
    readonly isLendingPoolAlreadyActivated: boolean;
    readonly isLendingPoolAlreadyDeactivated: boolean;
    readonly isLendingPoolNotActive: boolean;
    readonly isInvalidLiquiditySupply: boolean;
    readonly isInvalidLiquidityWithdrawal: boolean;
    readonly isNotEnoughLiquiditySupply: boolean;
    readonly isNotEnoughEligibleLiquidityToWithdraw: boolean;
    readonly isLendingPoolIsEmpty: boolean;
    readonly isOverflowError: boolean;
    readonly isUnderflowError: boolean;
    readonly isConversionError: boolean;
    readonly isIdAlreadyExists: boolean;
    readonly isNotEnoughRemainingCollateral: boolean;
    readonly isLoanDoesNotExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isNoDebtToRepay: boolean;
    readonly isInvalidAssetPrice: boolean;
    readonly isDiscountOutOfRange: boolean;
    readonly isAssetPriceNotSet: boolean;
    readonly isDivisionByZero: boolean;
    readonly isNoCollateralAssets: boolean;
    readonly isNoRepaymentMade: boolean;
    readonly isTooManyCollaterals: boolean;
    readonly isCollateralNotFound: boolean;
    readonly isTooManyDeposits: boolean;
    readonly isDepositMoreOrBorrowLess: boolean;
    readonly isAssetMismatch: boolean;
    readonly isAssetIsCollateral: boolean;
    readonly isAssetIsNotCollateral: boolean;
    readonly isAssetDoesNotExist: boolean;
    readonly isInvalidBidAmount: boolean;
    readonly isInvalidBidDiscount: boolean;
    readonly isDiscountsNotFound: boolean;
    readonly isInvalidBidStatus: boolean;
    readonly isNoBidFound: boolean;
    readonly isNotBidOwner: boolean;
    readonly isMarketAlreadyExists: boolean;
    readonly isNoSuchMarket: boolean;
    readonly isMarketIsFull: boolean;
    readonly isSystemTxContextError: boolean;
    readonly isTooManyDiscounts: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isLiquidationMarketActive: boolean;
    readonly isLiquidationMarketInactive: boolean;
    readonly isLiquidationMarketNotEmpty: boolean;
    readonly isLiquidationThresholdNotReached: boolean;
    readonly isInsufficientBurnt: boolean;
    readonly isNoLoanFound: boolean;
    readonly isTooManyAssets: boolean;
    readonly type:
      | "LendingPoolDoesNotExist"
      | "LendingPoolAlreadyExists"
      | "LendingPoolAlreadyActivated"
      | "LendingPoolAlreadyDeactivated"
      | "LendingPoolNotActive"
      | "InvalidLiquiditySupply"
      | "InvalidLiquidityWithdrawal"
      | "NotEnoughLiquiditySupply"
      | "NotEnoughEligibleLiquidityToWithdraw"
      | "LendingPoolIsEmpty"
      | "OverflowError"
      | "UnderflowError"
      | "ConversionError"
      | "IdAlreadyExists"
      | "NotEnoughRemainingCollateral"
      | "LoanDoesNotExists"
      | "NoDeposit"
      | "NoDebtToRepay"
      | "InvalidAssetPrice"
      | "DiscountOutOfRange"
      | "AssetPriceNotSet"
      | "DivisionByZero"
      | "NoCollateralAssets"
      | "NoRepaymentMade"
      | "TooManyCollaterals"
      | "CollateralNotFound"
      | "TooManyDeposits"
      | "DepositMoreOrBorrowLess"
      | "AssetMismatch"
      | "AssetIsCollateral"
      | "AssetIsNotCollateral"
      | "AssetDoesNotExist"
      | "InvalidBidAmount"
      | "InvalidBidDiscount"
      | "DiscountsNotFound"
      | "InvalidBidStatus"
      | "NoBidFound"
      | "NotBidOwner"
      | "MarketAlreadyExists"
      | "NoSuchMarket"
      | "MarketIsFull"
      | "SystemTxContextError"
      | "TooManyDiscounts"
      | "MarketIsNotActive"
      | "LiquidationMarketActive"
      | "LiquidationMarketInactive"
      | "LiquidationMarketNotEmpty"
      | "LiquidationThresholdNotReached"
      | "InsufficientBurnt"
      | "NoLoanFound"
      | "TooManyAssets";
  }

  /** @name SpRuntimeMultiSignature (155) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: "Ed25519" | "Sr25519" | "Ecdsa";
  }

  /** @name SpCoreSr25519Signature (156) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (157) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (160) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (161) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (162) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (163) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (166) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (167) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (168) */
  interface PalletTransactionPaymentChargeTransactionPayment
    extends Compact<u128> {}

  /** @name KylixRuntimeRuntime (169) */
  type KylixRuntimeRuntime = Null;
} // declare module

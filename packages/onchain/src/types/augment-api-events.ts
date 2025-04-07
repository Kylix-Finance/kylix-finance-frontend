// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/events";

import type { ApiTypes, AugmentedEvent } from "@polkadot/api-base/types";
import type {
  Bytes,
  Null,
  Option,
  Result,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type { AccountId32, H256 } from "@polkadot/types/interfaces/runtime";
import {
  PalletAssetsAssetAccount,
  PalletAssetsAssetDetails,
  PalletAssetsAssetMetadata,
  PalletBalancesAccountData,
  PalletBalancesBalanceLock,
  PalletBalancesIdAmount,
  PalletBalancesReserveData,
  PalletGrandpaStoredPendingChange,
  PalletGrandpaStoredState,
  SpConsensusAuraSr25519AppSr25519Public,
  LendingBorrowRepayUserBorrow,
  FinalityGrandpaEquivocationPrecommit,
  FinalityGrandpaEquivocationPrevote,
  FinalityGrandpaPrecommit,
  FinalityGrandpaPrevote,
  FrameSupportDispatchDispatchClass,
  FrameSupportDispatchDispatchInfo,
  FrameSupportDispatchPays,
  FrameSupportDispatchPerDispatchClassU32,
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSupportDispatchPerDispatchClassWeightsPerClass,
  FrameSupportPalletId,
  FrameSupportTokensMiscBalanceStatus,
  FrameSystemAccountInfo,
  FrameSystemCall,
  FrameSystemError,
  FrameSystemEvent,
  FrameSystemEventRecord,
  FrameSystemExtensionsCheckGenesis,
  FrameSystemExtensionsCheckNonZeroSender,
  FrameSystemExtensionsCheckNonce,
  FrameSystemExtensionsCheckSpecVersion,
  FrameSystemExtensionsCheckTxVersion,
  FrameSystemExtensionsCheckWeight,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsWeightsPerClass,
  FrameSystemPhase,
  KylixRuntimeRuntime,
  LendingCall,
  LendingCollateralLiquidationBid,
  LendingCollateralLiquidationBidStatus,
  LendingCollateralLiquidationLiquidation,
  LendingCollateralLiquidationLiquidationMarketConfig,
  LendingDepositsDepositPosition,
  LendingError,
  LendingEvent,
  LendingInterestRateInterestRateModel,
  LendingLendingPool,
  PalletAssetsAccountStatus,
  PalletAssetsApproval,
  PalletAssetsAssetStatus,
  PalletAssetsCall,
  PalletAssetsError,
  PalletAssetsEvent,
  PalletAssetsExistenceReason,
  PalletBalancesCall,
  PalletBalancesError,
  PalletBalancesEvent,
  PalletBalancesReasons,
  PalletGrandpaCall,
  PalletGrandpaError,
  PalletGrandpaEvent,
  PalletSudoCall,
  PalletSudoError,
  PalletSudoEvent,
  PalletTimestampCall,
  PalletTransactionPaymentChargeTransactionPayment,
  PalletTransactionPaymentEvent,
  PalletTransactionPaymentReleases,
  SpArithmeticArithmeticError,
  SpConsensusGrandpaAppPublic,
  SpConsensusGrandpaAppSignature,
  SpConsensusGrandpaEquivocation,
  SpConsensusGrandpaEquivocationProof,
  SpCoreEcdsaSignature,
  SpCoreEd25519Public,
  SpCoreEd25519Signature,
  SpCoreSr25519Public,
  SpCoreSr25519Signature,
  SpCoreVoid,
  SpRuntimeDigest,
  SpRuntimeDigestDigestItem,
  SpRuntimeDispatchError,
  SpRuntimeModuleError,
  SpRuntimeMultiSignature,
  SpRuntimeTokenError,
  SpRuntimeTransactionalError,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
} from "@polkadot/types/lookup";

export type __AugmentedEvent<ApiType extends ApiTypes> =
  AugmentedEvent<ApiType>;

declare module "@polkadot/api-base/types/events" {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<
        ApiType,
        [assetId: u32, accountsDestroyed: u32, accountsRemaining: u32],
        { assetId: u32; accountsDestroyed: u32; accountsRemaining: u32 }
      >;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<
        ApiType,
        [assetId: u32, owner: AccountId32, delegate: AccountId32],
        { assetId: u32; owner: AccountId32; delegate: AccountId32 }
      >;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<
        ApiType,
        [assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32],
        { assetId: u32; approvalsDestroyed: u32; approvalsRemaining: u32 }
      >;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          source: AccountId32,
          delegate: AccountId32,
          amount: u128,
        ],
        {
          assetId: u32;
          source: AccountId32;
          delegate: AccountId32;
          amount: u128;
        }
      >;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * The min_balance of an asset has been updated by the asset owner.
       **/
      AssetMinBalanceChanged: AugmentedEvent<
        ApiType,
        [assetId: u32, newMinBalance: u128],
        { assetId: u32; newMinBalance: u128 }
      >;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<
        ApiType,
        [assetId: u32],
        { assetId: u32 }
      >;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some account `who` was blocked.
       **/
      Blocked: AugmentedEvent<
        ApiType,
        [assetId: u32, who: AccountId32],
        { assetId: u32; who: AccountId32 }
      >;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<
        ApiType,
        [assetId: u32, owner: AccountId32, balance: u128],
        { assetId: u32; owner: AccountId32; balance: u128 }
      >;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<
        ApiType,
        [assetId: u32, creator: AccountId32, owner: AccountId32],
        { assetId: u32; creator: AccountId32; owner: AccountId32 }
      >;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<
        ApiType,
        [assetId: u32],
        { assetId: u32 }
      >;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<
        ApiType,
        [assetId: u32, owner: AccountId32],
        { assetId: u32; owner: AccountId32 }
      >;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<
        ApiType,
        [assetId: u32, who: AccountId32],
        { assetId: u32; who: AccountId32 }
      >;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<
        ApiType,
        [assetId: u32, owner: AccountId32, amount: u128],
        { assetId: u32; owner: AccountId32; amount: u128 }
      >;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<
        ApiType,
        [assetId: u32],
        { assetId: u32 }
      >;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          name: Bytes,
          symbol_: Bytes,
          decimals: u8,
          isFrozen: bool,
        ],
        {
          assetId: u32;
          name: Bytes;
          symbol: Bytes;
          decimals: u8;
          isFrozen: bool;
        }
      >;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<
        ApiType,
        [assetId: u32, owner: AccountId32],
        { assetId: u32; owner: AccountId32 }
      >;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          issuer: AccountId32,
          admin: AccountId32,
          freezer: AccountId32,
        ],
        {
          assetId: u32;
          issuer: AccountId32;
          admin: AccountId32;
          freezer: AccountId32;
        }
      >;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<
        ApiType,
        [assetId: u32, who: AccountId32],
        { assetId: u32; who: AccountId32 }
      >;
      /**
       * Some account `who` was created with a deposit from `depositor`.
       **/
      Touched: AugmentedEvent<
        ApiType,
        [assetId: u32, who: AccountId32, depositor: AccountId32],
        { assetId: u32; who: AccountId32; depositor: AccountId32 }
      >;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<
        ApiType,
        [assetId: u32, from: AccountId32, to: AccountId32, amount: u128],
        { assetId: u32; from: AccountId32; to: AccountId32; amount: u128 }
      >;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          owner: AccountId32,
          delegate: AccountId32,
          destination: AccountId32,
          amount: u128,
        ],
        {
          assetId: u32;
          owner: AccountId32;
          delegate: AccountId32;
          destination: AccountId32;
          amount: u128;
        }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<
        ApiType,
        [who: AccountId32, free: u128],
        { who: AccountId32; free: u128 }
      >;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<
        ApiType,
        [account: AccountId32, amount: u128],
        { account: AccountId32; amount: u128 }
      >;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<
        ApiType,
        [account: AccountId32, freeBalance: u128],
        { account: AccountId32; freeBalance: u128 }
      >;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<
        ApiType,
        [
          from: AccountId32,
          to: AccountId32,
          amount: u128,
          destinationStatus: FrameSupportTokensMiscBalanceStatus,
        ],
        {
          from: AccountId32;
          to: AccountId32;
          amount: u128;
          destinationStatus: FrameSupportTokensMiscBalanceStatus;
        }
      >;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<
        ApiType,
        [from: AccountId32, to: AccountId32, amount: u128],
        { from: AccountId32; to: AccountId32; amount: u128 }
      >;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<
        ApiType,
        [who: AccountId32],
        { who: AccountId32 }
      >;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<
        ApiType,
        [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>],
        { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }
      >;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    lending: {
      /**
       * Asset Price added.
       **/
      AssetPriceAdded: AugmentedEvent<
        ApiType,
        [asset: u32, baseAsset: u32, price: u128],
        { asset: u32; baseAsset: u32; price: u128 }
      >;
      /**
       * A new base asset has been set.
       **/
      BaseAsset: AugmentedEvent<ApiType, [asset: u32], { asset: u32 }>;
      /**
       * A new bid stable asset has been set.
       **/
      BidAsset: AugmentedEvent<ApiType, [asset: u32], { asset: u32 }>;
      /**
       * A new bid was placed in an existing market
       **/
      BidPlaced: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32, discount: u8, balance: u128],
        { who: AccountId32; asset: u32; discount: u8; balance: u128 }
      >;
      /**
       * A bid was intentionally removed by its own user.
       **/
      BidRemoved: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * A new loan has been borrowed from the lending pool
       **/
      Borrowed: AugmentedEvent<
        ApiType,
        [who: AccountId32, borrowedAssetId: u32, borrowedBalance: u128],
        { who: AccountId32; borrowedAssetId: u32; borrowedBalance: u128 }
      >;
      /**
       * Borrower account liquidated and Collaterals confiscated
       **/
      BorrowerLiquidated: AugmentedEvent<
        ApiType,
        [
          borrower: AccountId32,
          collaterals: Vec<ITuple<[u32, u128]>>,
          borrows: Vec<ITuple<[u32, u128]>>,
        ],
        {
          borrower: AccountId32;
          collaterals: Vec<ITuple<[u32, u128]>>;
          borrows: Vec<ITuple<[u32, u128]>>;
        }
      >;
      /**
       * Collateral discount updated
       **/
      CollateralDiscountUpdated: AugmentedEvent<
        ApiType,
        [asset: u32, discounts: Bytes],
        { asset: u32; discounts: Bytes }
      >;
      /**
       * Collateral sold in liquidation market
       **/
      CollateralSold: AugmentedEvent<
        ApiType,
        [
          asset: u32,
          amount: u128,
          paymentAssetId: u32,
          paidAmount: u128,
          discountPercent: u8,
          buyer: AccountId32,
        ],
        {
          asset: u32;
          amount: u128;
          paymentAssetId: u32;
          paidAmount: u128;
          discountPercent: u8;
          buyer: AccountId32;
        }
      >;
      /**
       * Disable an Asset to be used as collateral.
       **/
      DisabledAsCollateral: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * Dummy swap event
       **/
      DummySwap: AugmentedEvent<
        ApiType,
        [fromAsset: u32, fromAmount: u128, toAsset: u32, toAmount: u128],
        { fromAsset: u32; fromAmount: u128; toAsset: u32; toAmount: u128 }
      >;
      /**
       * Enable an Asset to be used as collateral.
       **/
      EnabledAsCollateral: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * A lending pool has been activated
       **/
      LendingPoolActivated: AugmentedEvent<
        ApiType,
        [asset: u32],
        { asset: u32 }
      >;
      /**
       * A new lending pool has been created
       **/
      LendingPoolAdded: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * A lending pool has been deactivated
       **/
      LendingPoolDeactivated: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * A lending pool rate model has been updated
       **/
      LendingPoolRateModelUpdated: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * A lending pool has been removed
       **/
      LendingPoolRemoved: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32],
        { who: AccountId32; asset: u32 }
      >;
      /**
       * Liquidated a borrower account.
       **/
      Liquidated: AugmentedEvent<
        ApiType,
        [borrower: AccountId32],
        { borrower: AccountId32 }
      >;
      /**
       * Liquidation market activated
       **/
      LiquidationMarketActivated: AugmentedEvent<
        ApiType,
        [asset: u32],
        { asset: u32 }
      >;
      /**
       * A new liquidation market was created.
       **/
      LiquidationMarketCreated: AugmentedEvent<
        ApiType,
        [asset: u32],
        { asset: u32 }
      >;
      /**
       * Liquidation market deactivated
       **/
      LiquidationMarketDeactivated: AugmentedEvent<
        ApiType,
        [asset: u32],
        { asset: u32 }
      >;
      /**
       * A new liquidation market was created.
       **/
      LiquidationMarketDeleted: AugmentedEvent<
        ApiType,
        [asset: u32],
        { asset: u32 }
      >;
      /**
       * Some liquidity has been supplied, or lended, to the lending pool
       **/
      LiquiditySupplied: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32, balance: u128],
        { who: AccountId32; asset: u32; balance: u128 }
      >;
      /**
       * Some liquidity has been withdrawn from the lending pool
       **/
      LiquidityWithdrawn: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32, balance: u128],
        { who: AccountId32; asset: u32; balance: u128 }
      >;
      /**
       * An LP token has been minted.
       **/
      LPTokenMinted: AugmentedEvent<
        ApiType,
        [who: AccountId32, asset: u32, balance: u128],
        { who: AccountId32; asset: u32; balance: u128 }
      >;
      /**
       * A loan has been repaid to the lending pool
       **/
      Repaid: AugmentedEvent<
        ApiType,
        [who: AccountId32, repaidAssetId: u32, repaidBalance: u128],
        { who: AccountId32; repaidAssetId: u32; repaidBalance: u128 }
      >;
      /**
       * Some rewards have been claimed
       **/
      RewardsClaimed: AugmentedEvent<
        ApiType,
        [who: AccountId32, balance: u128],
        { who: AccountId32; balance: u128 }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<
        ApiType,
        [oldSudoer: Option<AccountId32>],
        { oldSudoer: Option<AccountId32> }
      >;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<
        ApiType,
        [sudoResult: Result<Null, SpRuntimeDispatchError>],
        { sudoResult: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<
        ApiType,
        [sudoResult: Result<Null, SpRuntimeDispatchError>],
        { sudoResult: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<
        ApiType,
        [
          dispatchError: SpRuntimeDispatchError,
          dispatchInfo: FrameSupportDispatchDispatchInfo,
        ],
        {
          dispatchError: SpRuntimeDispatchError;
          dispatchInfo: FrameSupportDispatchDispatchInfo;
        }
      >;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<
        ApiType,
        [dispatchInfo: FrameSupportDispatchDispatchInfo],
        { dispatchInfo: FrameSupportDispatchDispatchInfo }
      >;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<
        ApiType,
        [account: AccountId32],
        { account: AccountId32 }
      >;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<
        ApiType,
        [account: AccountId32],
        { account: AccountId32 }
      >;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<
        ApiType,
        [sender: AccountId32, hash_: H256],
        { sender: AccountId32; hash_: H256 }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<
        ApiType,
        [who: AccountId32, actualFee: u128, tip: u128],
        { who: AccountId32; actualFee: u128; tip: u128 }
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module

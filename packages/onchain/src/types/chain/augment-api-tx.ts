// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */
//@ts-nocheck
//@ts-ignore
//@ts-expect-error error

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/submittable";

import type {
  ApiTypes,
  AugmentedSubmittable,
  SubmittableExtrinsic,
  SubmittableExtrinsicFunction,
} from "@polkadot/api-base/types";
import type {
  Bytes,
  Compact,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec";
import type { AnyNumber, IMethod, ITuple } from "@polkadot/types-codec/types";
import type {
  AccountId32,
  Call,
  MultiAddress,
} from "@polkadot/types/interfaces/runtime";
import {
  PalletAssetsAssetAccount,
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
  LendingBorrowRepayUserBorrow,
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
  PalletAssetsAssetDetails,
  PalletAssetsAssetMetadata,
  PalletAssetsAssetStatus,
  PalletAssetsCall,
  PalletAssetsError,
  PalletAssetsEvent,
  PalletAssetsExistenceReason,
  PalletBalancesAccountData,
  PalletBalancesBalanceLock,
  PalletBalancesCall,
  PalletBalancesError,
  PalletBalancesEvent,
  PalletBalancesIdAmount,
  PalletBalancesReasons,
  PalletBalancesReserveData,
  PalletGrandpaCall,
  PalletGrandpaError,
  PalletGrandpaEvent,
  PalletGrandpaStoredPendingChange,
  PalletGrandpaStoredState,
  PalletSudoCall,
  PalletSudoError,
  PalletSudoEvent,
  PalletTimestampCall,
  PalletTransactionPaymentChargeTransactionPayment,
  PalletTransactionPaymentEvent,
  PalletTransactionPaymentReleases,
  SpArithmeticArithmeticError,
  SpConsensusAuraSr25519AppSr25519Public,
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
export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> =
  SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> =
  SubmittableExtrinsicFunction<ApiType>;

declare module "@polkadot/api-base/types/submittable" {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assets: {
      /**
       * See [`Pallet::approve_transfer`].
       **/
      approveTransfer: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          delegate:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::block`].
       **/
      block: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::burn`].
       **/
      burn: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::cancel_approval`].
       **/
      cancelApproval: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          delegate:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::clear_metadata`].
       **/
      clearMetadata: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          admin:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          minBalance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, u128]
      >;
      /**
       * See [`Pallet::destroy_accounts`].
       **/
      destroyAccounts: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::destroy_approvals`].
       **/
      destroyApprovals: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::finish_destroy`].
       **/
      finishDestroy: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::force_asset_status`].
       **/
      forceAssetStatus: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          owner:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          issuer:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          admin:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          freezer:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          minBalance: Compact<u128> | AnyNumber | Uint8Array,
          isSufficient: bool | boolean | Uint8Array,
          isFrozen: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          Compact<u32>,
          MultiAddress,
          MultiAddress,
          MultiAddress,
          MultiAddress,
          Compact<u128>,
          bool,
          bool,
        ]
      >;
      /**
       * See [`Pallet::force_cancel_approval`].
       **/
      forceCancelApproval: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          owner:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          delegate:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, MultiAddress]
      >;
      /**
       * See [`Pallet::force_clear_metadata`].
       **/
      forceClearMetadata: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::force_create`].
       **/
      forceCreate: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          owner:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          isSufficient: bool | boolean | Uint8Array,
          minBalance: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, bool, Compact<u128>]
      >;
      /**
       * See [`Pallet::force_set_metadata`].
       **/
      forceSetMetadata: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          name: Bytes | string | Uint8Array,
          symbol: Bytes | string | Uint8Array,
          decimals: u8 | AnyNumber | Uint8Array,
          isFrozen: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, Bytes, Bytes, u8, bool]
      >;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          source:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::freeze`].
       **/
      freeze: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::freeze_asset`].
       **/
      freezeAsset: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::mint`].
       **/
      mint: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          beneficiary:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::refund`].
       **/
      refund: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          allowBurn: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, bool]
      >;
      /**
       * See [`Pallet::refund_other`].
       **/
      refundOther: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          name: Bytes | string | Uint8Array,
          symbol: Bytes | string | Uint8Array,
          decimals: u8 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, Bytes, Bytes, u8]
      >;
      /**
       * See [`Pallet::set_min_balance`].
       **/
      setMinBalance: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          minBalance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, u128]
      >;
      /**
       * See [`Pallet::set_team`].
       **/
      setTeam: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          issuer:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          admin:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          freezer:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, MultiAddress, MultiAddress]
      >;
      /**
       * See [`Pallet::start_destroy`].
       **/
      startDestroy: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::thaw`].
       **/
      thaw: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::thaw_asset`].
       **/
      thawAsset: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::touch`].
       **/
      touch: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * See [`Pallet::touch_other`].
       **/
      touchOther: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          target:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer_approved`].
       **/
      transferApproved: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          owner:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          destination:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          target:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer_ownership`].
       **/
      transferOwnership: AugmentedSubmittable<
        (
          id: Compact<u32> | AnyNumber | Uint8Array,
          owner:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, MultiAddress]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          newFree: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<
        (
          source:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, u128]
      >;
      /**
       * See [`Pallet::set_balance_deprecated`].
       **/
      setBalanceDeprecated: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          newFree: Compact<u128> | AnyNumber | Uint8Array,
          oldReserved: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          keepAlive: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, bool]
      >;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<
        (
          who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId32>]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * See [`Pallet::note_stalled`].
       **/
      noteStalled: AugmentedSubmittable<
        (
          delay: u32 | AnyNumber | Uint8Array,
          bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u32]
      >;
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<
        (
          equivocationProof:
            | SpConsensusGrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          keyOwnerProof: SpCoreVoid | null
        ) => SubmittableExtrinsic<ApiType>,
        [SpConsensusGrandpaEquivocationProof, SpCoreVoid]
      >;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<
        (
          equivocationProof:
            | SpConsensusGrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          keyOwnerProof: SpCoreVoid | null
        ) => SubmittableExtrinsic<ApiType>,
        [SpConsensusGrandpaEquivocationProof, SpCoreVoid]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    lending: {
      /**
       * See [`Pallet::activate_lending_pool`].
       **/
      activateLendingPool: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::activate_liquidation_market`].
       **/
      activateLiquidationMarket: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::borrow`].
       **/
      borrow: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u128]
      >;
      /**
       * See [`Pallet::cancel_bid`].
       **/
      cancelBid: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          discount: u8 | AnyNumber | Uint8Array,
          index: u32 | AnyNumber | Uint8Array,
          blocknumber: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u8, u32, u32]
      >;
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<
        (
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u128]
      >;
      /**
       * See [`Pallet::create_lending_pool`].
       **/
      createLendingPool: AugmentedSubmittable<
        (
          id: u32 | AnyNumber | Uint8Array,
          asset: u32 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u32, u128]
      >;
      /**
       * See [`Pallet::create_liquidation_market`].
       **/
      createLiquidationMarket: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::deactivate_lending_pool`].
       **/
      deactivateLendingPool: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::deactivate_liquidation_market`].
       **/
      deactivateLiquidationMarket: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::delete_liquidation_market`].
       **/
      deleteLiquidationMarket: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::disable_as_collateral`].
       **/
      disableAsCollateral: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::enable_as_collateral`].
       **/
      enableAsCollateral: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::execute_market`].
       **/
      executeMarket: AugmentedSubmittable<
        (
          assets: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<u32>]
      >;
      /**
       * See [`Pallet::liquidate`].
       **/
      liquidate: AugmentedSubmittable<
        (
          borrower: AccountId32 | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId32]
      >;
      /**
       * See [`Pallet::place_bid`].
       **/
      placeBid: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          discount: u8 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u8, u128]
      >;
      /**
       * See [`Pallet::repay`].
       **/
      repay: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u128]
      >;
      /**
       * See [`Pallet::repay_all`].
       **/
      repayAll: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::repay_liquidated_debt`].
       **/
      repayLiquidatedDebt: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::set_asset_price`].
       **/
      setAssetPrice: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          baseAsset: u32 | AnyNumber | Uint8Array,
          price: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u32, u128]
      >;
      /**
       * See [`Pallet::supply`].
       **/
      supply: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u128]
      >;
      /**
       * See [`Pallet::update_base_asset`].
       **/
      updateBaseAsset: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::update_bid_asset`].
       **/
      updateBidAsset: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::update_collateral_discounts`].
       **/
      updateCollateralDiscounts: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          discounts: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, Bytes]
      >;
      /**
       * See [`Pallet::update_pool_rate_model`].
       **/
      updatePoolRateModel: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * See [`Pallet::withdraw`].
       **/
      withdraw: AugmentedSubmittable<
        (
          asset: u32 | AnyNumber | Uint8Array,
          balance: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u128]
      >;
      /**
       * See [`Pallet::withdraw_all`].
       **/
      withdrawAll: AugmentedSubmittable<
        (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<
        (
          updated:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress]
      >;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<
        (
          call: Call | IMethod | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Call]
      >;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          call: Call | IMethod | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Call]
      >;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<
        (
          call: Call | IMethod | string | Uint8Array,
          weight:
            | SpWeightsWeightV2Weight
            | { refTime?: any; proofSize?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Call, SpWeightsWeightV2Weight]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<
        (
          prefix: Bytes | string | Uint8Array,
          subkeys: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, u32]
      >;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<
        (
          keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<Bytes>]
      >;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<
        (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<
        (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<
        (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<
        (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<
        (pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u64]
      >;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<
        (
          items:
            | Vec<ITuple<[Bytes, Bytes]>>
            | [Bytes | string | Uint8Array, Bytes | string | Uint8Array][]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<ITuple<[Bytes, Bytes]>>]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<
        (
          now: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module

// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

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

export interface ChainTX {
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress]
    >;
    /**
     * See [`Pallet::clear_metadata`].
     **/
    clearMetadata: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress, u128]
    >;
    /**
     * See [`Pallet::destroy_accounts`].
     **/
    destroyAccounts: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>]
    >;
    /**
     * See [`Pallet::destroy_approvals`].
     **/
    destroyApprovals: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>]
    >;
    /**
     * See [`Pallet::finish_destroy`].
     **/
    finishDestroy: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress, MultiAddress]
    >;
    /**
     * See [`Pallet::force_clear_metadata`].
     **/
    forceClearMetadata: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress]
    >;
    /**
     * See [`Pallet::freeze_asset`].
     **/
    freezeAsset: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress, Compact<u128>]
    >;
    /**
     * See [`Pallet::refund`].
     **/
    refund: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array,
        allowBurn: bool | boolean | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, Bytes, Bytes, u8]
    >;
    /**
     * See [`Pallet::set_min_balance`].
     **/
    setMinBalance: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array,
        minBalance: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress, MultiAddress, MultiAddress]
    >;
    /**
     * See [`Pallet::start_destroy`].
     **/
    startDestroy: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress]
    >;
    /**
     * See [`Pallet::thaw_asset`].
     **/
    thawAsset: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>]
    >;
    /**
     * See [`Pallet::touch`].
     **/
    touch: AugmentedSubmittable<
      (
        id: Compact<u32> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u32>, MultiAddress]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [MultiAddress, Compact<u128>]
    >;
    /**
     * See [`Pallet::upgrade_accounts`].
     **/
    upgradeAccounts: AugmentedSubmittable<
      (
        who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
      ) => SubmittableExtrinsic<"promise">,
      [Vec<AccountId32>]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
  };

  lending: {
    /**
     * See [`Pallet::activate_lending_pool`].
     **/
    activateLendingPool: AugmentedSubmittable<
      (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<"promise">,
      [u32]
    >;
    /**
     * See [`Pallet::borrow`].
     **/
    borrow: AugmentedSubmittable<
      (
        asset: u32 | AnyNumber | Uint8Array,
        balance: u128 | AnyNumber | Uint8Array,
        collateralAsset: u32 | AnyNumber | Uint8Array,
        collateralBalance: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [u32, u128, u32, u128]
    >;
    /**
     * See [`Pallet::claim_rewards`].
     **/
    claimRewards: AugmentedSubmittable<
      (
        balance: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [u32, u32, u128]
    >;
    /**
     * See [`Pallet::deactivate_lending_pool`].
     **/
    deactivateLendingPool: AugmentedSubmittable<
      (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<"promise">,
      [u32]
    >;
    /**
     * See [`Pallet::repay`].
     **/
    repay: AugmentedSubmittable<
      (
        asset: u32 | AnyNumber | Uint8Array,
        balance: u128 | AnyNumber | Uint8Array,
        collateralAsset: u32 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [u32, u128, u32]
    >;
    /**
     * See [`Pallet::set_asset_price`].
     **/
    setAssetPrice: AugmentedSubmittable<
      (
        asset1: u32 | AnyNumber | Uint8Array,
        asset2: u32 | AnyNumber | Uint8Array,
        price: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [u32, u32, u128]
    >;
    /**
     * See [`Pallet::supply`].
     **/
    supply: AugmentedSubmittable<
      (
        asset: u32 | AnyNumber | Uint8Array,
        balance: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [u32, u128]
    >;
    /**
     * See [`Pallet::update_pool_kink`].
     **/
    updatePoolKink: AugmentedSubmittable<
      (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<"promise">,
      [u32]
    >;
    /**
     * See [`Pallet::update_pool_rate_model`].
     **/
    updatePoolRateModel: AugmentedSubmittable<
      (asset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<"promise">,
      [u32]
    >;
    /**
     * See [`Pallet::withdraw`].
     **/
    withdraw: AugmentedSubmittable<
      (
        asset: u32 | AnyNumber | Uint8Array,
        balance: u128 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [u32, u128]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
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
      ) => SubmittableExtrinsic<"promise">,
      [MultiAddress]
    >;
    /**
     * See [`Pallet::sudo`].
     **/
    sudo: AugmentedSubmittable<
      (
        call: Call | IMethod | string | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [MultiAddress, Call]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
  };
  system: {
    /**
     * See [`Pallet::kill_prefix`].
     **/
    killPrefix: AugmentedSubmittable<
      (
        prefix: Bytes | string | Uint8Array,
        subkeys: u32 | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [Bytes, u32]
    >;
    /**
     * See [`Pallet::kill_storage`].
     **/
    killStorage: AugmentedSubmittable<
      (
        keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]
      ) => SubmittableExtrinsic<"promise">,
      [Vec<Bytes>]
    >;
    /**
     * See [`Pallet::remark`].
     **/
    remark: AugmentedSubmittable<
      (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<"promise">,
      [Bytes]
    >;
    /**
     * See [`Pallet::remark_with_event`].
     **/
    remarkWithEvent: AugmentedSubmittable<
      (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<"promise">,
      [Bytes]
    >;
    /**
     * See [`Pallet::set_code`].
     **/
    setCode: AugmentedSubmittable<
      (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<"promise">,
      [Bytes]
    >;
    /**
     * See [`Pallet::set_code_without_checks`].
     **/
    setCodeWithoutChecks: AugmentedSubmittable<
      (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<"promise">,
      [Bytes]
    >;
    /**
     * See [`Pallet::set_heap_pages`].
     **/
    setHeapPages: AugmentedSubmittable<
      (pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<"promise">,
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
      ) => SubmittableExtrinsic<"promise">,
      [Vec<ITuple<[Bytes, Bytes]>>]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
  };
  timestamp: {
    /**
     * See [`Pallet::set`].
     **/
    set: AugmentedSubmittable<
      (
        now: Compact<u64> | AnyNumber | Uint8Array
      ) => SubmittableExtrinsic<"promise">,
      [Compact<u64>]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<"promise">;
  };
} // AugmentedSubmittables

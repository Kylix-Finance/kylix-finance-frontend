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
import {
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSystemAccountInfo,
  FrameSystemEventRecord,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemPhase,
  LendingLendingPool,
  PalletAssetsApproval,
  PalletAssetsAssetAccount,
  PalletAssetsAssetDetails,
  PalletAssetsAssetMetadata,
  PalletBalancesAccountData,
  PalletBalancesBalanceLock,
  PalletBalancesIdAmount,
  PalletBalancesReserveData,
  PalletTransactionPaymentReleases,
  SpRuntimeDigest,
} from "./base";

export interface ChainQuery {
  assets: {
    /**
     * The holdings of a specific account for a specific asset.
     **/
    account: AugmentedQuery<
      "promise",
      (
        arg1: u32 | AnyNumber | Uint8Array,
        arg2: AccountId32 | string | Uint8Array
      ) => Observable<Option<PalletAssetsAssetAccount>>,
      [u32, AccountId32]
    > &
      QueryableStorageEntry<"promise", [u32, AccountId32]>;
    /**
     * Approved balance transfers. First balance is the amount approved for transfer. Second
     * is the amount of `T::Currency` reserved for storing this.
     * First key is the asset ID, second key is the owner and third key is the delegate.
     **/
    approvals: AugmentedQuery<
      "promise",
      (
        arg1: u32 | AnyNumber | Uint8Array,
        arg2: AccountId32 | string | Uint8Array,
        arg3: AccountId32 | string | Uint8Array
      ) => Observable<Option<PalletAssetsApproval>>,
      [u32, AccountId32, AccountId32]
    > &
      QueryableStorageEntry<"promise", [u32, AccountId32, AccountId32]>;
    /**
     * Details of an asset.
     **/
    asset: AugmentedQuery<
      "promise",
      (
        arg: u32 | AnyNumber | Uint8Array
      ) => Observable<Option<PalletAssetsAssetDetails>>,
      [u32]
    > &
      QueryableStorageEntry<"promise", [u32]>;
    /**
     * Metadata of an asset.
     **/
    metadata: AugmentedQuery<
      "promise",
      (
        arg: u32 | AnyNumber | Uint8Array
      ) => Observable<PalletAssetsAssetMetadata>,
      [u32]
    > &
      QueryableStorageEntry<"promise", [u32]>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  balances: {
    /**
     * The Balances pallet example of storing the balance of an account.
     *
     * # Example
     *
     * ```nocompile
     * impl pallet_balances::Config for Runtime {
     * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     * }
     * ```
     *
     * You can also store the balance of an account in the `System` pallet.
     *
     * # Example
     *
     * ```nocompile
     * impl pallet_balances::Config for Runtime {
     * type AccountStore = System
     * }
     * ```
     *
     * But this comes with tradeoffs, storing account balances in the system pallet stores
     * `frame_system` data alongside the account data contrary to storing account balances in the
     * `Balances` pallet, which uses a `StorageMap` to store balances data only.
     * NOTE: This is only used in the case that this pallet is used to store balances.
     **/
    account: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<PalletBalancesAccountData>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * Freeze locks on account balances.
     **/
    freezes: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<Vec<PalletBalancesIdAmount>>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * Holds on account balances.
     **/
    holds: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<Vec<PalletBalancesIdAmount>>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * The total units of outstanding deactivated balance in the system.
     **/
    inactiveIssuance: AugmentedQuery<"promise", () => Observable<u128>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Any liquidity locks on some account balances.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<Vec<PalletBalancesBalanceLock>>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * Named reserves on some account balances.
     **/
    reserves: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<Vec<PalletBalancesReserveData>>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * The total units issued in the system.
     **/
    totalIssuance: AugmentedQuery<"promise", () => Observable<u128>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  lending: {
    /**
     * The storage to hold prices of assets w.r.t. other other assets
     * This is the dummy storage, ideally this functionality would be implemented in a dedicatd
     * pallet sotres (asset_id1, asset_id2) => FixedU128
     **/
    assetPrices: AugmentedQuery<
      "promise",
      (
        arg:
          | ITuple<[u32, u32]>
          | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
      ) => Observable<Option<u128>>,
      [ITuple<[u32, u32]>]
    > &
      QueryableStorageEntry<"promise", [ITuple<[u32, u32]>]>;
    /**
     * The borrow status of accounts
     * (AccountId, corrowed_asset_id, collateral_asset_id) => UserBorrow details
     **/
    // borrows: AugmentedQuery<
    //   "promise",
    //   (
    //     arg:
    //       | ITuple<[AccountId32, u32, u32]>
    //       | [
    //           AccountId32 | string | Uint8Array,
    //           u32 | AnyNumber | Uint8Array,
    //           u32 | AnyNumber | Uint8Array,
    //         ]
    //   ) => Observable<Option<LendingBorrowRepayUserBorrow>>,
    //   [ITuple<[AccountId32, u32, u32]>]
    // > &
    //   QueryableStorageEntry<"promise", [ITuple<[AccountId32, u32, u32]>]>;
    /**
     * Kylix runtime storage items
     *
     * Lending pools defined for the assets
     *
     * StorageMap AssetPool { AssetId } => LendingPool { PoolId, Balance }
     **/
    lendingPoolStorage: AugmentedQuery<
      "promise",
      (
        arg: { asset?: any } | string | Uint8Array
      ) => Observable<LendingLendingPool>
    > &
      QueryableStorageEntry<"promise">;
    /**
     * The minimum (starting) and maximum exchange rate allowed for a market.
     **/
    minMaxExchangeRate: AugmentedQuery<
      "promise",
      () => Observable<ITuple<[u128, u128]>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * The accrued supply_index of accounts for assets
     **/
    supplyIndexStorage: AugmentedQuery<
      "promise",
      (
        arg:
          | ITuple<[AccountId32, u32]>
          | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]
      ) => Observable<string>,
      [ITuple<[AccountId32, u32]>]
    > &
      QueryableStorageEntry<"promise", [ITuple<[AccountId32, u32]>]>;
    /**
     * Kylix runtime storage items
     *
     * Lending pools Assets Properties
     *
     * StorageMap CurrencyId<T> { AssetId } => LendingAsset { PoolId, Balance }
     *
     * The timestamp of the last calculation of accrued interest
     **/
    underlyingAssetStorage: AugmentedQuery<
      "promise",
      (arg: u32 | AnyNumber | Uint8Array) => Observable<any>,
      [u32]
    > &
      QueryableStorageEntry<"promise", [u32]>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  sudo: {
    /**
     * The `AccountId` of the sudo key.
     **/
    key: AugmentedQuery<"promise", () => Observable<Option<AccountId32>>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  system: {
    /**
     * The full account information for a particular account ID.
     **/
    account: AugmentedQuery<
      "promise",
      (
        arg: AccountId32 | string | Uint8Array
      ) => Observable<FrameSystemAccountInfo>,
      [AccountId32]
    > &
      QueryableStorageEntry<"promise", [AccountId32]>;
    /**
     * Total length (in bytes) for all extrinsics put together, for the current block.
     **/
    allExtrinsicsLen: AugmentedQuery<
      "promise",
      () => Observable<Option<u32>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Map of block numbers to block hashes.
     **/
    blockHash: AugmentedQuery<
      "promise",
      (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>,
      [u32]
    > &
      QueryableStorageEntry<"promise", [u32]>;
    /**
     * The current weight for the block.
     **/
    blockWeight: AugmentedQuery<
      "promise",
      () => Observable<FrameSupportDispatchPerDispatchClassWeight>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Digest of the current block, also part of the block header.
     **/
    digest: AugmentedQuery<"promise", () => Observable<SpRuntimeDigest>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * The number of events in the `Events<T>` list.
     **/
    eventCount: AugmentedQuery<"promise", () => Observable<u32>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Events deposited for the current block.
     *
     * NOTE: The item is unbound and should therefore never be read on chain.
     * It could otherwise inflate the PoV size of a block.
     *
     * Events have a large in-memory size. Box the events to not go out-of-memory
     * just in case someone still reads them from within the runtime.
     **/
    events: AugmentedQuery<
      "promise",
      () => Observable<Vec<FrameSystemEventRecord>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Mapping between a topic (represented by T::Hash) and a vector of indexes
     * of events in the `<Events<T>>` list.
     *
     * All topic vectors have deterministic storage locations depending on the topic. This
     * allows light-clients to leverage the changes trie storage tracking mechanism and
     * in case of changes fetch the list of events of interest.
     *
     * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     * the `EventIndex` then in case if the topic has the same contents on the next block
     * no notification will be triggered thus the event might be lost.
     **/
    eventTopics: AugmentedQuery<
      "promise",
      (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>,
      [H256]
    > &
      QueryableStorageEntry<"promise", [H256]>;
    /**
     * The execution phase of the block.
     **/
    executionPhase: AugmentedQuery<
      "promise",
      () => Observable<Option<FrameSystemPhase>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Total extrinsics count for the current block.
     **/
    extrinsicCount: AugmentedQuery<
      "promise",
      () => Observable<Option<u32>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Extrinsics data for the current block (maps an extrinsic's index to its data).
     **/
    extrinsicData: AugmentedQuery<
      "promise",
      (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
      [u32]
    > &
      QueryableStorageEntry<"promise", [u32]>;
    /**
     * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     **/
    lastRuntimeUpgrade: AugmentedQuery<
      "promise",
      () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * The current block number being processed. Set by `execute_block`.
     **/
    number: AugmentedQuery<"promise", () => Observable<u32>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Hash of the previous block.
     **/
    parentHash: AugmentedQuery<"promise", () => Observable<H256>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     * (default) if not.
     **/
    upgradedToTripleRefCount: AugmentedQuery<
      "promise",
      () => Observable<bool>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     **/
    upgradedToU32RefCount: AugmentedQuery<
      "promise",
      () => Observable<bool>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  timestamp: {
    /**
     * Did the timestamp get updated in this block?
     **/
    didUpdate: AugmentedQuery<"promise", () => Observable<bool>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Current time for the current block.
     **/
    now: AugmentedQuery<"promise", () => Observable<u64>, []> &
      QueryableStorageEntry<"promise", []>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
  transactionPayment: {
    nextFeeMultiplier: AugmentedQuery<"promise", () => Observable<u128>, []> &
      QueryableStorageEntry<"promise", []>;
    storageVersion: AugmentedQuery<
      "promise",
      () => Observable<PalletTransactionPaymentReleases>,
      []
    > &
      QueryableStorageEntry<"promise", []>;
    /**
     * Generic query
     **/
    [key: string]: QueryableStorageEntry<"promise">;
  };
} // AugmentedQueries

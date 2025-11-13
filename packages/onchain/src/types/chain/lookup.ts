// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
//@ts-nocheck
//@ts-ignore
//@ts-expect-error error
/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: "u32",
    consumers: "u32",
    providers: "u32",
    sufficients: "u32",
    data: "PalletBalancesAccountData",
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: "u128",
    reserved: "u128",
    frozen: "u128",
    flags: "u128",
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: "SpWeightsWeightV2Weight",
    operational: "SpWeightsWeightV2Weight",
    mandatory: "SpWeightsWeightV2Weight",
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: "Compact<u64>",
    proofSize: "Compact<u64>",
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: "Vec<SpRuntimeDigestDigestItem>",
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: "Bytes",
      __Unused1: "Null",
      __Unused2: "Null",
      __Unused3: "Null",
      Consensus: "([u8;4],Bytes)",
      Seal: "([u8;4],Bytes)",
      PreRuntime: "([u8;4],Bytes)",
      __Unused7: "Null",
      RuntimeEnvironmentUpdated: "Null",
    },
  },
  /**
   * Lookup19: frame_system::EventRecord<kylix_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: "FrameSystemPhase",
    event: "Event",
    topics: "Vec<H256>",
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: "FrameSupportDispatchDispatchInfo",
      },
      ExtrinsicFailed: {
        dispatchError: "SpRuntimeDispatchError",
        dispatchInfo: "FrameSupportDispatchDispatchInfo",
      },
      CodeUpdated: "Null",
      NewAccount: {
        account: "AccountId32",
      },
      KilledAccount: {
        account: "AccountId32",
      },
      Remarked: {
        _alias: {
          hash_: "hash",
        },
        sender: "AccountId32",
        hash_: "H256",
      },
    },
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: "SpWeightsWeightV2Weight",
    class: "FrameSupportDispatchDispatchClass",
    paysFee: "FrameSupportDispatchPays",
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ["Normal", "Operational", "Mandatory"],
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ["Yes", "No"],
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: "Null",
      CannotLookup: "Null",
      BadOrigin: "Null",
      Module: "SpRuntimeModuleError",
      ConsumerRemaining: "Null",
      NoProviders: "Null",
      TooManyConsumers: "Null",
      Token: "SpRuntimeTokenError",
      Arithmetic: "SpArithmeticArithmeticError",
      Transactional: "SpRuntimeTransactionalError",
      Exhausted: "Null",
      Corruption: "Null",
      Unavailable: "Null",
      RootNotAllowed: "Null",
    },
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: "u8",
    error: "[u8;4]",
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: [
      "FundsUnavailable",
      "OnlyProvider",
      "BelowMinimum",
      "CannotCreate",
      "UnknownAsset",
      "Frozen",
      "Unsupported",
      "CannotCreateHold",
      "NotExpendable",
      "Blocked",
    ],
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ["Underflow", "Overflow", "DivisionByZero"],
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ["LimitReached", "NoLayer"],
  },
  /**
   * Lookup30: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: "Vec<(SpConsensusGrandpaAppPublic,u64)>",
      },
      Paused: "Null",
      Resumed: "Null",
    },
  },
  /**
   * Lookup33: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: "SpCoreEd25519Public",
  /**
   * Lookup34: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: "[u8;32]",
  /**
   * Lookup35: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: "AccountId32",
        freeBalance: "u128",
      },
      DustLost: {
        account: "AccountId32",
        amount: "u128",
      },
      Transfer: {
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
      },
      BalanceSet: {
        who: "AccountId32",
        free: "u128",
      },
      Reserved: {
        who: "AccountId32",
        amount: "u128",
      },
      Unreserved: {
        who: "AccountId32",
        amount: "u128",
      },
      ReserveRepatriated: {
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
        destinationStatus: "FrameSupportTokensMiscBalanceStatus",
      },
      Deposit: {
        who: "AccountId32",
        amount: "u128",
      },
      Withdraw: {
        who: "AccountId32",
        amount: "u128",
      },
      Slashed: {
        who: "AccountId32",
        amount: "u128",
      },
      Minted: {
        who: "AccountId32",
        amount: "u128",
      },
      Burned: {
        who: "AccountId32",
        amount: "u128",
      },
      Suspended: {
        who: "AccountId32",
        amount: "u128",
      },
      Restored: {
        who: "AccountId32",
        amount: "u128",
      },
      Upgraded: {
        who: "AccountId32",
      },
      Issued: {
        amount: "u128",
      },
      Rescinded: {
        amount: "u128",
      },
      Locked: {
        who: "AccountId32",
        amount: "u128",
      },
      Unlocked: {
        who: "AccountId32",
        amount: "u128",
      },
      Frozen: {
        who: "AccountId32",
        amount: "u128",
      },
      Thawed: {
        who: "AccountId32",
        amount: "u128",
      },
    },
  },
  /**
   * Lookup36: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ["Free", "Reserved"],
  },
  /**
   * Lookup37: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: "AccountId32",
        actualFee: "u128",
        tip: "u128",
      },
    },
  },
  /**
   * Lookup38: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: "Result<Null, SpRuntimeDispatchError>",
      },
      KeyChanged: {
        oldSudoer: "Option<AccountId32>",
      },
      SudoAsDone: {
        sudoResult: "Result<Null, SpRuntimeDispatchError>",
      },
    },
  },
  /**
   * Lookup42: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: "u32",
        creator: "AccountId32",
        owner: "AccountId32",
      },
      Issued: {
        assetId: "u32",
        owner: "AccountId32",
        amount: "u128",
      },
      Transferred: {
        assetId: "u32",
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
      },
      Burned: {
        assetId: "u32",
        owner: "AccountId32",
        balance: "u128",
      },
      TeamChanged: {
        assetId: "u32",
        issuer: "AccountId32",
        admin: "AccountId32",
        freezer: "AccountId32",
      },
      OwnerChanged: {
        assetId: "u32",
        owner: "AccountId32",
      },
      Frozen: {
        assetId: "u32",
        who: "AccountId32",
      },
      Thawed: {
        assetId: "u32",
        who: "AccountId32",
      },
      AssetFrozen: {
        assetId: "u32",
      },
      AssetThawed: {
        assetId: "u32",
      },
      AccountsDestroyed: {
        assetId: "u32",
        accountsDestroyed: "u32",
        accountsRemaining: "u32",
      },
      ApprovalsDestroyed: {
        assetId: "u32",
        approvalsDestroyed: "u32",
        approvalsRemaining: "u32",
      },
      DestructionStarted: {
        assetId: "u32",
      },
      Destroyed: {
        assetId: "u32",
      },
      ForceCreated: {
        assetId: "u32",
        owner: "AccountId32",
      },
      MetadataSet: {
        assetId: "u32",
        name: "Bytes",
        symbol: "Bytes",
        decimals: "u8",
        isFrozen: "bool",
      },
      MetadataCleared: {
        assetId: "u32",
      },
      ApprovedTransfer: {
        assetId: "u32",
        source: "AccountId32",
        delegate: "AccountId32",
        amount: "u128",
      },
      ApprovalCancelled: {
        assetId: "u32",
        owner: "AccountId32",
        delegate: "AccountId32",
      },
      TransferredApproved: {
        assetId: "u32",
        owner: "AccountId32",
        delegate: "AccountId32",
        destination: "AccountId32",
        amount: "u128",
      },
      AssetStatusChanged: {
        assetId: "u32",
      },
      AssetMinBalanceChanged: {
        assetId: "u32",
        newMinBalance: "u128",
      },
      Touched: {
        assetId: "u32",
        who: "AccountId32",
        depositor: "AccountId32",
      },
      Blocked: {
        assetId: "u32",
        who: "AccountId32",
      },
    },
  },
  /**
   * Lookup44: lending::pallet::Event<T>
   **/
  LendingEvent: {
    _enum: {
      LiquiditySupplied: {
        who: "AccountId32",
        asset: "u32",
        balance: "u128",
      },
      LiquidityWithdrawn: {
        who: "AccountId32",
        asset: "u32",
        balance: "u128",
      },
      Borrowed: {
        who: "AccountId32",
        borrowedAssetId: "u32",
        borrowedBalance: "u128",
      },
      Repaid: {
        who: "AccountId32",
        repaidAssetId: "u32",
        repaidBalance: "u128",
      },
      RewardsClaimed: {
        who: "AccountId32",
        balance: "u128",
      },
      LendingPoolAdded: {
        who: "AccountId32",
        asset: "u32",
      },
      LendingPoolRemoved: {
        who: "AccountId32",
        asset: "u32",
      },
      LendingPoolActivated: {
        asset: "u32",
      },
      LendingPoolDeactivated: {
        who: "AccountId32",
        asset: "u32",
      },
      LendingPoolRateModelUpdated: {
        who: "AccountId32",
        asset: "u32",
      },
      LPTokenMinted: {
        who: "AccountId32",
        asset: "u32",
        balance: "u128",
      },
      AssetPriceAdded: {
        asset: "u32",
        baseAsset: "u32",
        price: "u128",
      },
      EnabledAsCollateral: {
        who: "AccountId32",
        asset: "u32",
      },
      DisabledAsCollateral: {
        who: "AccountId32",
        asset: "u32",
      },
      BaseAsset: {
        asset: "u32",
      },
      LiquidationMarketCreated: {
        asset: "u32",
      },
      LiquidationMarketDeleted: {
        asset: "u32",
      },
      BidAsset: {
        asset: "u32",
      },
      BidPlaced: {
        who: "AccountId32",
        asset: "u32",
        discount: "u8",
        balance: "u128",
      },
      BidRemoved: {
        who: "AccountId32",
        asset: "u32",
      },
      Liquidated: {
        borrower: "AccountId32",
      },
      BorrowerLiquidated: {
        borrower: "AccountId32",
        collaterals: "Vec<(u32,u128)>",
        borrows: "Vec<(u32,u128)>",
      },
      CollateralDiscountUpdated: {
        asset: "u32",
        discounts: "Bytes",
      },
      LiquidationMarketActivated: {
        asset: "u32",
      },
      LiquidationMarketDeactivated: {
        asset: "u32",
      },
      CollateralSold: {
        asset: "u32",
        amount: "u128",
        paymentAssetId: "u32",
        paidAmount: "u128",
        discountPercent: "u8",
        buyer: "AccountId32",
      },
      DummySwap: {
        fromAsset: "u32",
        fromAmount: "u128",
        toAsset: "u32",
        toAmount: "u128",
      },
    },
  },
  /**
   * Lookup48: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: "u32",
      Finalization: "Null",
      Initialization: "Null",
    },
  },
  /**
   * Lookup52: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: "Compact<u32>",
    specName: "Text",
  },
  /**
   * Lookup55: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: "Bytes",
      },
      set_heap_pages: {
        pages: "u64",
      },
      set_code: {
        code: "Bytes",
      },
      set_code_without_checks: {
        code: "Bytes",
      },
      set_storage: {
        items: "Vec<(Bytes,Bytes)>",
      },
      kill_storage: {
        _alias: {
          keys_: "keys",
        },
        keys_: "Vec<Bytes>",
      },
      kill_prefix: {
        prefix: "Bytes",
        subkeys: "u32",
      },
      remark_with_event: {
        remark: "Bytes",
      },
    },
  },
  /**
   * Lookup59: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: "SpWeightsWeightV2Weight",
    maxBlock: "SpWeightsWeightV2Weight",
    perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
  },
  /**
   * Lookup60: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: "FrameSystemLimitsWeightsPerClass",
    operational: "FrameSystemLimitsWeightsPerClass",
    mandatory: "FrameSystemLimitsWeightsPerClass",
  },
  /**
   * Lookup61: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: "SpWeightsWeightV2Weight",
    maxExtrinsic: "Option<SpWeightsWeightV2Weight>",
    maxTotal: "Option<SpWeightsWeightV2Weight>",
    reserved: "Option<SpWeightsWeightV2Weight>",
  },
  /**
   * Lookup63: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: "FrameSupportDispatchPerDispatchClassU32",
  },
  /**
   * Lookup64: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: "u32",
    operational: "u32",
    mandatory: "u32",
  },
  /**
   * Lookup65: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: "u64",
    write: "u64",
  },
  /**
   * Lookup66: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: "Text",
    implName: "Text",
    authoringVersion: "u32",
    specVersion: "u32",
    implVersion: "u32",
    apis: "Vec<([u8;8],u32)>",
    transactionVersion: "u32",
    stateVersion: "u8",
  },
  /**
   * Lookup72: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: [
      "InvalidSpecName",
      "SpecVersionNeedsToIncrease",
      "FailedToExtractRuntimeVersion",
      "NonDefaultComposite",
      "NonZeroRefCount",
      "CallFiltered",
    ],
  },
  /**
   * Lookup73: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: "Compact<u64>",
      },
    },
  },
  /**
   * Lookup75: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: "SpCoreSr25519Public",
  /**
   * Lookup76: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: "[u8;32]",
  /**
   * Lookup79: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: "Null",
      PendingPause: {
        scheduledAt: "u32",
        delay: "u32",
      },
      Paused: "Null",
      PendingResume: {
        scheduledAt: "u32",
        delay: "u32",
      },
    },
  },
  /**
   * Lookup80: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: "u32",
    delay: "u32",
    nextAuthorities: "Vec<(SpConsensusGrandpaAppPublic,u64)>",
    forced: "Option<u32>",
  },
  /**
   * Lookup83: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: "SpConsensusGrandpaEquivocationProof",
        keyOwnerProof: "SpCoreVoid",
      },
      report_equivocation_unsigned: {
        equivocationProof: "SpConsensusGrandpaEquivocationProof",
        keyOwnerProof: "SpCoreVoid",
      },
      note_stalled: {
        delay: "u32",
        bestFinalizedBlockNumber: "u32",
      },
    },
  },
  /**
   * Lookup84: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: "u64",
    equivocation: "SpConsensusGrandpaEquivocation",
  },
  /**
   * Lookup85: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: "FinalityGrandpaEquivocationPrevote",
      Precommit: "FinalityGrandpaEquivocationPrecommit",
    },
  },
  /**
   * Lookup86: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: "u64",
    identity: "SpConsensusGrandpaAppPublic",
    first: "(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)",
    second: "(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)",
  },
  /**
   * Lookup87: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: "H256",
    targetNumber: "u32",
  },
  /**
   * Lookup88: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: "SpCoreEd25519Signature",
  /**
   * Lookup89: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: "[u8;64]",
  /**
   * Lookup92: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: "u64",
    identity: "SpConsensusGrandpaAppPublic",
    first: "(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)",
    second: "(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)",
  },
  /**
   * Lookup93: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: "H256",
    targetNumber: "u32",
  },
  /**
   * Lookup95: sp_core::Void
   **/
  SpCoreVoid: "Null",
  /**
   * Lookup96: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: [
      "PauseFailed",
      "ResumeFailed",
      "ChangePending",
      "TooSoon",
      "InvalidKeyOwnershipProof",
      "InvalidEquivocationProof",
      "DuplicateOffenceReport",
    ],
  },
  /**
   * Lookup98: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: "[u8;8]",
    amount: "u128",
    reasons: "PalletBalancesReasons",
  },
  /**
   * Lookup99: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ["Fee", "Misc", "All"],
  },
  /**
   * Lookup102: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: "[u8;8]",
    amount: "u128",
  },
  /**
   * Lookup105: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: "Null",
    amount: "u128",
  },
  /**
   * Lookup107: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: "MultiAddress",
        value: "Compact<u128>",
      },
      set_balance_deprecated: {
        who: "MultiAddress",
        newFree: "Compact<u128>",
        oldReserved: "Compact<u128>",
      },
      force_transfer: {
        source: "MultiAddress",
        dest: "MultiAddress",
        value: "Compact<u128>",
      },
      transfer_keep_alive: {
        dest: "MultiAddress",
        value: "Compact<u128>",
      },
      transfer_all: {
        dest: "MultiAddress",
        keepAlive: "bool",
      },
      force_unreserve: {
        who: "MultiAddress",
        amount: "u128",
      },
      upgrade_accounts: {
        who: "Vec<AccountId32>",
      },
      transfer: {
        dest: "MultiAddress",
        value: "Compact<u128>",
      },
      force_set_balance: {
        who: "MultiAddress",
        newFree: "Compact<u128>",
      },
    },
  },
  /**
   * Lookup113: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: [
      "VestingBalance",
      "LiquidityRestrictions",
      "InsufficientBalance",
      "ExistentialDeposit",
      "Expendability",
      "ExistingVestingSchedule",
      "DeadAccount",
      "TooManyReserves",
      "TooManyHolds",
      "TooManyFreezes",
    ],
  },
  /**
   * Lookup114: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ["V1Ancient", "V2"],
  },
  /**
   * Lookup115: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: "Call",
      },
      sudo_unchecked_weight: {
        call: "Call",
        weight: "SpWeightsWeightV2Weight",
      },
      set_key: {
        _alias: {
          new_: "new",
        },
        new_: "MultiAddress",
      },
      sudo_as: {
        who: "MultiAddress",
        call: "Call",
      },
    },
  },
  /**
   * Lookup117: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: "Compact<u32>",
        admin: "MultiAddress",
        minBalance: "u128",
      },
      force_create: {
        id: "Compact<u32>",
        owner: "MultiAddress",
        isSufficient: "bool",
        minBalance: "Compact<u128>",
      },
      start_destroy: {
        id: "Compact<u32>",
      },
      destroy_accounts: {
        id: "Compact<u32>",
      },
      destroy_approvals: {
        id: "Compact<u32>",
      },
      finish_destroy: {
        id: "Compact<u32>",
      },
      mint: {
        id: "Compact<u32>",
        beneficiary: "MultiAddress",
        amount: "Compact<u128>",
      },
      burn: {
        id: "Compact<u32>",
        who: "MultiAddress",
        amount: "Compact<u128>",
      },
      transfer: {
        id: "Compact<u32>",
        target: "MultiAddress",
        amount: "Compact<u128>",
      },
      transfer_keep_alive: {
        id: "Compact<u32>",
        target: "MultiAddress",
        amount: "Compact<u128>",
      },
      force_transfer: {
        id: "Compact<u32>",
        source: "MultiAddress",
        dest: "MultiAddress",
        amount: "Compact<u128>",
      },
      freeze: {
        id: "Compact<u32>",
        who: "MultiAddress",
      },
      thaw: {
        id: "Compact<u32>",
        who: "MultiAddress",
      },
      freeze_asset: {
        id: "Compact<u32>",
      },
      thaw_asset: {
        id: "Compact<u32>",
      },
      transfer_ownership: {
        id: "Compact<u32>",
        owner: "MultiAddress",
      },
      set_team: {
        id: "Compact<u32>",
        issuer: "MultiAddress",
        admin: "MultiAddress",
        freezer: "MultiAddress",
      },
      set_metadata: {
        id: "Compact<u32>",
        name: "Bytes",
        symbol: "Bytes",
        decimals: "u8",
      },
      clear_metadata: {
        id: "Compact<u32>",
      },
      force_set_metadata: {
        id: "Compact<u32>",
        name: "Bytes",
        symbol: "Bytes",
        decimals: "u8",
        isFrozen: "bool",
      },
      force_clear_metadata: {
        id: "Compact<u32>",
      },
      force_asset_status: {
        id: "Compact<u32>",
        owner: "MultiAddress",
        issuer: "MultiAddress",
        admin: "MultiAddress",
        freezer: "MultiAddress",
        minBalance: "Compact<u128>",
        isSufficient: "bool",
        isFrozen: "bool",
      },
      approve_transfer: {
        id: "Compact<u32>",
        delegate: "MultiAddress",
        amount: "Compact<u128>",
      },
      cancel_approval: {
        id: "Compact<u32>",
        delegate: "MultiAddress",
      },
      force_cancel_approval: {
        id: "Compact<u32>",
        owner: "MultiAddress",
        delegate: "MultiAddress",
      },
      transfer_approved: {
        id: "Compact<u32>",
        owner: "MultiAddress",
        destination: "MultiAddress",
        amount: "Compact<u128>",
      },
      touch: {
        id: "Compact<u32>",
      },
      refund: {
        id: "Compact<u32>",
        allowBurn: "bool",
      },
      set_min_balance: {
        id: "Compact<u32>",
        minBalance: "u128",
      },
      touch_other: {
        id: "Compact<u32>",
        who: "MultiAddress",
      },
      refund_other: {
        id: "Compact<u32>",
        who: "MultiAddress",
      },
      block: {
        id: "Compact<u32>",
        who: "MultiAddress",
      },
    },
  },
  /**
   * Lookup118: lending::pallet::Call<T>
   **/
  LendingCall: {
    _enum: {
      create_lending_pool: {
        id: "u32",
        asset: "u32",
        balance: "u128",
      },
      activate_lending_pool: {
        asset: "u32",
      },
      supply: {
        asset: "u32",
        balance: "u128",
      },
      withdraw: {
        asset: "u32",
        balance: "u128",
      },
      withdraw_all: {
        asset: "u32",
      },
      borrow: {
        asset: "u32",
        balance: "u128",
      },
      repay: {
        asset: "u32",
        balance: "u128",
      },
      repay_all: {
        asset: "u32",
      },
      claim_rewards: {
        balance: "u128",
      },
      deactivate_lending_pool: {
        asset: "u32",
      },
      update_pool_rate_model: {
        asset: "u32",
      },
      set_asset_price: {
        asset: "u32",
        baseAsset: "u32",
        price: "u128",
      },
      enable_as_collateral: {
        asset: "u32",
      },
      disable_as_collateral: {
        asset: "u32",
      },
      update_base_asset: {
        asset: "u32",
      },
      __Unused15: "Null",
      place_bid: {
        asset: "u32",
        discount: "u8",
        balance: "u128",
      },
      cancel_bid: {
        asset: "u32",
        discount: "u8",
        index: "u32",
        blocknumber: "u32",
      },
      liquidate: {
        borrower: "AccountId32",
      },
      update_collateral_discounts: {
        asset: "u32",
        discounts: "Bytes",
      },
      execute_market: {
        assets: "Vec<u32>",
      },
      repay_liquidated_debt: {
        asset: "u32",
      },
      update_bid_asset: {
        asset: "u32",
      },
      create_liquidation_market: {
        asset: "u32",
      },
      delete_liquidation_market: {
        asset: "u32",
      },
      activate_liquidation_market: {
        asset: "u32",
      },
      deactivate_liquidation_market: {
        asset: "u32",
      },
    },
  },
  /**
   * Lookup120: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ["RequireSudo"],
  },
  /**
   * Lookup121: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: "AccountId32",
    issuer: "AccountId32",
    admin: "AccountId32",
    freezer: "AccountId32",
    supply: "u128",
    deposit: "u128",
    minBalance: "u128",
    isSufficient: "bool",
    accounts: "u32",
    sufficients: "u32",
    approvals: "u32",
    status: "PalletAssetsAssetStatus",
  },
  /**
   * Lookup122: pallet_assets::types::AssetStatus
   **/
  PalletAssetsAssetStatus: {
    _enum: ["Live", "Frozen", "Destroying"],
  },
  /**
   * Lookup124: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32>
   **/
  PalletAssetsAssetAccount: {
    balance: "u128",
    status: "PalletAssetsAccountStatus",
    reason: "PalletAssetsExistenceReason",
    extra: "Null",
  },
  /**
   * Lookup125: pallet_assets::types::AccountStatus
   **/
  PalletAssetsAccountStatus: {
    _enum: ["Liquid", "Frozen", "Blocked"],
  },
  /**
   * Lookup126: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: "Null",
      Sufficient: "Null",
      DepositHeld: "u128",
      DepositRefunded: "Null",
      DepositFrom: "(AccountId32,u128)",
    },
  },
  /**
   * Lookup128: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: "u128",
    deposit: "u128",
  },
  /**
   * Lookup129: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: "u128",
    name: "Bytes",
    symbol: "Bytes",
    decimals: "u8",
    isFrozen: "bool",
  },
  /**
   * Lookup131: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: [
      "BalanceLow",
      "NoAccount",
      "NoPermission",
      "Unknown",
      "Frozen",
      "InUse",
      "BadWitness",
      "MinBalanceZero",
      "UnavailableConsumer",
      "BadMetadata",
      "Unapproved",
      "WouldDie",
      "AlreadyExists",
      "NoDeposit",
      "WouldBurn",
      "LiveAsset",
      "AssetNotLive",
      "IncorrectStatus",
      "NotFrozen",
      "CallbackFailed",
    ],
  },
  /**
   * Lookup132: lending::pallet::LendingPool<T>
   **/
  LendingLendingPool: {
    id: "u32",
    lendTokenId: "u32",
    reserveBalance: "u128",
    borrowedBalance: "u128",
    activated: "bool",
    interestModel: "LendingInterestRateInterestRateModel",
    reserveFactor: "Perbill",
    exchangeRate: "Perbill",
    collateralFactor: "Perbill",
    liquidationThreshold: "Perbill",
    borrowRate: "Perbill",
    supplyRate: "Perbill",
    lastAccruedInterestAt: "u64",
    borrowIndex: "u128",
    supplyIndex: "u128",
    liquidation: "LendingCollateralLiquidationLiquidation",
  },
  /**
   * Lookup133: lending::interest_rate::InterestRateModel
   **/
  LendingInterestRateInterestRateModel: {
    y0: "u128",
    y1: "u128",
    xm: "u128",
    ym: "u128",
  },
  /**
   * Lookup135: lending::collateral_liquidation::Liquidation<T>
   **/
  LendingCollateralLiquidationLiquidation: {
    totalCollateral: "u128",
    totalDebt: "u128",
  },
  /**
   * Lookup137: lending::borrow_repay::UserBorrow<T>
   **/
  LendingBorrowRepayUserBorrow: {
    borrowedAsset: "u32",
    borrowedBalance: "u128",
    borrowIndex: "u128",
    lastAccruedInterestAt: "u64",
  },
  /**
   * Lookup140: lending::deposits::DepositPosition<T>
   **/
  LendingDepositsDepositPosition: {
    depositAsset: "u32",
  },
  /**
   * Lookup145: lending::collateral_liquidation::Bid<T>
   **/
  LendingCollateralLiquidationBid: {
    bidder: "AccountId32",
    amount: "u128",
    discount: "u8",
    blocknumber: "u32",
    index: "u32",
    filledAmount: "u128",
    status: "LendingCollateralLiquidationBidStatus",
  },
  /**
   * Lookup146: lending::collateral_liquidation::BidStatus
   **/
  LendingCollateralLiquidationBidStatus: {
    _enum: ["Active", "PartiallyFilled", "Fulfilled", "Cancelled"],
  },
  /**
   * Lookup150: lending::collateral_liquidation::LiquidationMarketConfig<D>
   **/
  LendingCollateralLiquidationLiquidationMarketConfig: {
    discounts: "Bytes",
    isActive: "bool",
  },
  /**
   * Lookup152: frame_support::PalletId
   **/
  FrameSupportPalletId: "[u8;8]",
  /**
   * Lookup153: lending::pallet::Error<T>
   **/
  LendingError: {
    _enum: [
      "LendingPoolDoesNotExist",
      "LendingPoolAlreadyExists",
      "LendingPoolAlreadyActivated",
      "LendingPoolAlreadyDeactivated",
      "LendingPoolNotActive",
      "InvalidLiquiditySupply",
      "InvalidLiquidityWithdrawal",
      "NotEnoughLiquiditySupply",
      "NotEnoughEligibleLiquidityToWithdraw",
      "LendingPoolIsEmpty",
      "OverflowError",
      "UnderflowError",
      "ConversionError",
      "IdAlreadyExists",
      "NotEnoughRemainingCollateral",
      "LoanDoesNotExists",
      "NoDeposit",
      "NoDebtToRepay",
      "InvalidAssetPrice",
      "DiscountOutOfRange",
      "AssetPriceNotSet",
      "DivisionByZero",
      "NoCollateralAssets",
      "NoRepaymentMade",
      "TooManyCollaterals",
      "CollateralNotFound",
      "TooManyDeposits",
      "DepositMoreOrBorrowLess",
      "AssetMismatch",
      "AssetIsCollateral",
      "AssetIsNotCollateral",
      "AssetDoesNotExist",
      "InvalidBidAmount",
      "InvalidBidDiscount",
      "DiscountsNotFound",
      "InvalidBidStatus",
      "NoBidFound",
      "NotBidOwner",
      "MarketAlreadyExists",
      "NoSuchMarket",
      "MarketIsFull",
      "SystemTxContextError",
      "TooManyDiscounts",
      "MarketIsNotActive",
      "LiquidationMarketActive",
      "LiquidationMarketInactive",
      "LiquidationMarketNotEmpty",
      "LiquidationThresholdNotReached",
      "InsufficientBurnt",
      "NoLoanFound",
      "TooManyAssets",
    ],
  },
  /**
   * Lookup155: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: "SpCoreEd25519Signature",
      Sr25519: "SpCoreSr25519Signature",
      Ecdsa: "SpCoreEcdsaSignature",
    },
  },
  /**
   * Lookup156: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: "[u8;64]",
  /**
   * Lookup157: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: "[u8;65]",
  /**
   * Lookup160: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: "Null",
  /**
   * Lookup161: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: "Null",
  /**
   * Lookup162: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: "Null",
  /**
   * Lookup163: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: "Null",
  /**
   * Lookup166: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: "Compact<u32>",
  /**
   * Lookup167: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: "Null",
  /**
   * Lookup168: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
  /**
   * Lookup169: kylix_runtime::Runtime
   **/
  KylixRuntimeRuntime: "Null",
};

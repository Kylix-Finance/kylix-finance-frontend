// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/errors";

import type { ApiTypes, AugmentedError } from "@polkadot/api-base/types";

export type __AugmentedError<ApiType extends ApiTypes> =
  AugmentedError<ApiType>;

declare module "@polkadot/api-base/types/errors" {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is not live, and likely being destroyed.
       **/
      AssetNotLive: AugmentedError<ApiType>;
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Callback action resulted in error
       **/
      CallbackFailed: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset status is not the expected status.
       **/
      IncorrectStatus: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The asset is a live asset and is actively being used. Usually emit for operations such
       * as `start_destroy` which require the asset to be in a destroying state.
       **/
      LiveAsset: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The asset should be frozen before the given operation.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
       * fewer then the maximum number of consumers has been reached.
       **/
      UnavailableConsumer: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `MaxHolds`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    lending: {
      /**
       * Asset does not exist
       **/
      AssetDoesNotExist: AugmentedError<ApiType>;
      /**
       * Asset is collateral
       **/
      AssetIsCollateral: AugmentedError<ApiType>;
      /**
       * Asset is not collateral
       **/
      AssetIsNotCollateral: AugmentedError<ApiType>;
      /**
       * Operation on different asset
       **/
      AssetMismatch: AugmentedError<ApiType>;
      /**
       * The price of the asset is not available
       **/
      AssetPriceNotSet: AugmentedError<ApiType>;
      /**
       * A collater not found
       **/
      CollateralNotFound: AugmentedError<ApiType>;
      /**
       * The classic Conversion Error
       **/
      ConversionError: AugmentedError<ApiType>;
      /**
       * Not enough deposit or collateral to allow this borrow. Deposit more or borrow lesser
       **/
      DepositMoreOrBorrowLess: AugmentedError<ApiType>;
      /**
       * Price of the discount is invalid
       **/
      DiscountOutOfRange: AugmentedError<ApiType>;
      /**
       * Discounts not configured for the collateral
       **/
      DiscountsNotFound: AugmentedError<ApiType>;
      /**
       * Division by zero
       **/
      DivisionByZero: AugmentedError<ApiType>;
      /**
       * The ID already exists
       **/
      IdAlreadyExists: AugmentedError<ApiType>;
      /**
       * Burnt less than specified LP token
       **/
      InsufficientBurnt: AugmentedError<ApiType>;
      /**
       * Price of the asset can not be zero
       **/
      InvalidAssetPrice: AugmentedError<ApiType>;
      /**
       * The bid amount is invalid
       **/
      InvalidBidAmount: AugmentedError<ApiType>;
      /**
       * The bid discount is invalid
       **/
      InvalidBidDiscount: AugmentedError<ApiType>;
      /**
       * The bid status is invalid
       **/
      InvalidBidStatus: AugmentedError<ApiType>;
      /**
       * The balance amount to supply is not valid
       **/
      InvalidLiquiditySupply: AugmentedError<ApiType>;
      /**
       * The balance amount to withdraw is not valid
       **/
      InvalidLiquidityWithdrawal: AugmentedError<ApiType>;
      /**
       * Lending Pool already activated
       **/
      LendingPoolAlreadyActivated: AugmentedError<ApiType>;
      /**
       * Lending Pool already deactivated
       **/
      LendingPoolAlreadyDeactivated: AugmentedError<ApiType>;
      /**
       * Lending Pool already exists
       **/
      LendingPoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Lending Pool does not exist
       **/
      LendingPoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * Lending Pool is empty
       **/
      LendingPoolIsEmpty: AugmentedError<ApiType>;
      /**
       * Lending Pool is not active or has been deprecated
       **/
      LendingPoolNotActive: AugmentedError<ApiType>;
      /**
       * Market is active
       **/
      LiquidationMarketActive: AugmentedError<ApiType>;
      /**
       * Market is active
       **/
      LiquidationMarketInactive: AugmentedError<ApiType>;
      /**
       * Liquidation market is not empty
       **/
      LiquidationMarketNotEmpty: AugmentedError<ApiType>;
      /**
       * Loan has not reached liquidation threshold
       **/
      LiquidationThresholdNotReached: AugmentedError<ApiType>;
      /**
       * The Loan being repaid does not exist
       **/
      LoanDoesNotExists: AugmentedError<ApiType>;
      /**
       * Trying to create a market that already exists.
       **/
      MarketAlreadyExists: AugmentedError<ApiType>;
      /**
       * The BoundedBTreeMap is full, cannot insert more bids.
       **/
      MarketIsFull: AugmentedError<ApiType>;
      /**
       * Market is inactive
       **/
      MarketIsNotActive: AugmentedError<ApiType>;
      /**
       * The bid does not exist
       **/
      NoBidFound: AugmentedError<ApiType>;
      /**
       * No collateral found
       **/
      NoCollateralAssets: AugmentedError<ApiType>;
      /**
       * There is no debt to repay
       **/
      NoDebtToRepay: AugmentedError<ApiType>;
      /**
       * No Deposit Available
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * no loan found for the account
       **/
      NoLoanFound: AugmentedError<ApiType>;
      /**
       * No repayment made
       **/
      NoRepaymentMade: AugmentedError<ApiType>;
      /**
       * Trying to place a bid into a market that does not exist.
       **/
      NoSuchMarket: AugmentedError<ApiType>;
      /**
       * Caller is not the owner of the bid
       **/
      NotBidOwner: AugmentedError<ApiType>;
      /**
       * The user wants to withdraw more than allowed!
       **/
      NotEnoughEligibleLiquidityToWithdraw: AugmentedError<ApiType>;
      /**
       * The user has not enough liquidity
       **/
      NotEnoughLiquiditySupply: AugmentedError<ApiType>;
      /**
       * The not enough collateral assets remains
       **/
      NotEnoughRemainingCollateral: AugmentedError<ApiType>;
      /**
       * The classic Overflow Error
       **/
      OverflowError: AugmentedError<ApiType>;
      /**
       * Transaction context has incorrect tx-index or blocknumber
       **/
      SystemTxContextError: AugmentedError<ApiType>;
      /**
       * Too many assets to process in a single call
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * Too many collaterals than allowed
       **/
      TooManyCollaterals: AugmentedError<ApiType>;
      /**
       * Too many deposits than allowed
       **/
      TooManyDeposits: AugmentedError<ApiType>;
      /**
       * Too many discounts in the list
       **/
      TooManyDiscounts: AugmentedError<ApiType>;
      /**
       * The less-known Underflow Error
       **/
      UnderflowError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       *
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module

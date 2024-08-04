export type StoreSetFn<StoreType> = (
  partial:
    | StoreType
    | Partial<StoreType>
    | ((state: StoreType) => StoreType | Partial<StoreType>),
  replace?: boolean | undefined
) => void;

export type VoidNoArgs = () => void;

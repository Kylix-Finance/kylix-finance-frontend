export type TransitionName = "Grow" | "Slide" | "Zoom";

export type VoidWithArg<Arg> = (arg: Arg) => void;
export type VoidNoArgs = () => void;

export enum STORAGE_KEY {
  CONFIGS = "CONFIGS",
}

export type StoreSetFn<StoreType> = (
  partial:
    | StoreType
    | Partial<StoreType>
    | ((state: StoreType) => StoreType | Partial<StoreType>),
  replace?: boolean | undefined
) => void;

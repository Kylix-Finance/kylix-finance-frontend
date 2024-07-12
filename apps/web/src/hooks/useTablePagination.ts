import { GlobalStore, useGlobalStore } from "~/store";

export const useTablePagination = (name: GlobalStore.TableName) => {
  const globalStore = useGlobalStore();

  const updatePagination = (
    props: Partial<GlobalStore.PaginationDefaultProps>
  ) => globalStore.updatePagination({ name, props });

  return {
    pagination: globalStore.pagination[name],
    updatePagination,
  };
};

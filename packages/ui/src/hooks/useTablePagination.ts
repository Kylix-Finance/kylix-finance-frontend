import { TableStore, useTableStore } from "../store";

export const useTablePagination = (name: TableStore.TableName) => {
  const tableStore = useTableStore();

  const updatePagination = (
    props: Partial<TableStore.PaginationDefaultProps>
  ) => tableStore.updatePagination({ name, props });

  return {
    pagination: tableStore.pagination[name],
    updatePagination,
  };
};

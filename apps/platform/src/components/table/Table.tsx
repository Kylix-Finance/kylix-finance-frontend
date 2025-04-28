import React from "react";
import { flexRender, type Table as ReactTable } from "@tanstack/react-table";
import styles from "./Table.module.scss";
import ChevronUp from "~/assets/icons/chevron-up.svg";
import ChevronDown from "~/assets/icons/chevron-down.svg";
import { Skeleton } from "../skeleton";

interface TableProps {
  table: ReactTable<any>;
  isLoading: boolean;
}

export function Table({ table, isLoading }: TableProps) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((hg) => (
            <tr className={styles.tr} key={hg.id}>
              {hg.headers.map((header) => {
                const sort = header.column.getIsSorted();
                const isSortable = header.column.getCanSort();
                return (
                  <th
                    className={styles.th}
                    key={header.id}
                    data-is-sortable={isSortable}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className={styles.th_content}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {isSortable && (
                        <div className={styles.arrows}>
                          <ChevronUp
                            className={styles.arrow}
                            data-active={sort === "asc"}
                          />
                          <ChevronDown
                            className={styles.arrow}
                            data-active={sort === "desc"}
                          />
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className={styles.tr}>
                  {table.getVisibleFlatColumns().map((_, colIndex) => (
                    <td className={styles.td} key={colIndex}>
                      <Skeleton
                        height={30}
                        width="80%"
                        className={styles.skel}
                        isLoading
                      />
                    </td>
                  ))}
                </tr>
              ))
            : table.getRowModel().rows.map((row) => (
                <tr key={row.id} className={styles.tr}>
                  {row.getVisibleCells().map((cell) => (
                    <td className={styles.td} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import { flexRender, type Table as ReactTable } from "@tanstack/react-table";
import styles from "./Table.module.scss";
import ChevronUp from "~/assets/icons/chevron-up.svg";
import ChevronDown from "~/assets/icons/chevron-down.svg";

interface TableProps {
  table: ReactTable<any>;
}

export function Table({ table }: TableProps) {
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
          {table.getRowModel().rows.map((row) => (
            <tr className={styles.tr} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={styles.td} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import { flexRender, type Table as ReactTable } from "@tanstack/react-table";
import styles from "./Table.module.css";

interface TableProps {
  table: ReactTable<unknown>;
}

export function Table({ table }: TableProps) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((hg) => (
            <tr className={styles.tr} key={hg.id}>
              {hg.headers.map((header) => (
                <th className={styles.th} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
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

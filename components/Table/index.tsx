"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react"
import { Button } from "@nextui-org/react"

type row = Record<string, string>

type column = {
  key: string
  label: string
}

interface Props {
  rows: row[]
  columns: column[]
}

export const TableComponent: React.FC<Props> = ({ rows, columns }) => {
  return (
    <Table aria-label="Ultimas ventas" className="dark:border-text dark:border-1 rounded-xl min-w-fit">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className="cursor-pointer hover:text-white hover:bg-neutral duration-250">
            {(columnKey) => (
              columnKey === 'actions' ?
                (<TableCell className="first:rounded-s-lg last:rounded-e-lg flex gap-2 items-center">
                  <Button color="default" aria-label="Edit">
                    Edit
                  </Button>
                  <Button color="danger" aria-label="Delete">
                    Delete
                  </Button>
                </TableCell>) :
                (<TableCell className="first:rounded-s-lg last:rounded-e-lg">
                  {getKeyValue(item, columnKey)}
                </TableCell>)
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

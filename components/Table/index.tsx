"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    pet: "Camila",
    type: "Veterinaria",
  },
  {
    key: "2",
    name: "Zoey Lang",
    pet: "Uñañe",
    type: "Peluquería",
  },
  {
    key: "3",
    name: "Jane Fisher",
    pet: "Sindy",
    type: "Veterinaria",
  },
  {
    key: "4",
    name: "William Howard",
    pet: "Commy",
    type: "Peluquería",
  },
];

const columns = [
  {
    key: "name",
    label: "NOMBRE",
  },
  {
    key: "pet",
    label: "MASCOTA",
  },
  {
    key: "type",
    label: "TIPO",
  },
];

export const TableComponent = () => {
  return (
    <Table aria-label="Ultimas ventas" className="dark:border-text dark:border-1 rounded-xl min-w-fit">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className="cursor-pointer hover:text-white hover:bg-neutral duration-250">
            {(columnKey) => <TableCell className="first:rounded-s-lg last:rounded-e-lg">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

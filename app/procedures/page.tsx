import React from 'react'
import { ModalButton } from '@/components/ModalButton'
import { TableComponent } from '@/components/Table'

const rows = [
  {
    key: "1",
    name: "Consulta",
    type: "Veterinaria",
    actions: "acciones",
  },
  {
    key: "2",
    name: "Vacunación",
    type: "Veterinaria",
    actions: "acciones",
  },
  {
    key: "3",
    name: "Desparasitación",
    type: "Veterinaria",
    actions: "acciones",
  },
  {
    key: "4",
    name: "Baño y corte",
    type: "Peluquería",
    actions: "acciones",
  },
];

const columns = [
  {
    key: "name",
    label: "NOMBRE",
  },
  {
    key: "type",
    label: "TIPO",
  },
  {
    key: "actions",
    label: "ACCIONES",
  },
]

const Procedures = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Procedimientos
      </h1>
      <section className="w-full sm:px-8 my-10 rounded-lg">
        <ModalButton />
      </section>
      <main className="w-full sm:px-8">
        <TableComponent rows={rows} columns={columns} />
      </main>
    </main>
  )
}

export default Procedures
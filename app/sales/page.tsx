import { LineChartComponent } from '@/components/LineChart'
import { TableComponent } from '@/components/Table'
import React from 'react'

const rows = [
  {
    key: "1",
    date: "19-12-2023",
    name: "Tony Reichert",
    pet: "Camila",
    type: "Veterinaria",
    procedure: "Consulta"
  },
  {
    key: "2",
    date: "19-12-2023",
    name: "Zoey Lang",
    pet: "Uñañe",
    type: "Peluquería",
    procedure: "Vacunación"
  },
  {
    key: "3",
    date: "19-12-2023",
    name: "Jane Fisher",
    pet: "Sindy",
    type: "Veterinaria",
    procedure: "Consulta"
  },
  {
    key: "4",
    date: "19-12-2023",
    name: "William Howard",
    pet: "Commy",
    type: "Peluquería",
    procedure: "Corte poodle"
  },
];

const columns = [
  {
    key: "date",
    label: "FECHA",
  },
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
  {
    key: "procedure",
    label: "PROCEDIMIENTO",
  },
]

const Sales = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Ventas
      </h1>
      <section className="w-full sm:px-8 my-10 rounded-lg">
        <LineChartComponent />
      </section>
      <main className="w-full sm:px-8">
        <TableComponent rows={rows} columns={columns} />
      </main>
    </main>
  )
}

export default Sales
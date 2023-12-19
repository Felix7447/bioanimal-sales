import React from 'react'
import { ModalButton } from '@/components/ModalButton'
import { TableComponent } from '@/components/Table'

const rows = [
  {
    key: "1",
    name: "Camila",
    tutor: "Zulay Aguilar",
    breed: "Poodle",
    gender: "Hembra",
    color: "Blanco",
    actions: "acciones",
  },
  {
    key: "2",
    name: "Violeta",
    tutor: "Zulay Aguilar",
    breed: "Poodle",
    gender: "Hembra",
    color: "Blanco",
    actions: "acciones",
  },
  {
    key: "3",
    name: "Balto",
    tutor: "Manueh Antonio",
    breed: "Mestizo",
    gender: "Macho",
    color: "Chiguire",
    actions: "acciones",
  },
];

const columns = [
  {
    key: "name",
    label: "NOMBRE",
  },
  {
    key: "tutor",
    label: "TUTOR",
  },
  {
    key: "breed",
    label: "RAZA",
  },
  {
    key: "gender",
    label: "SEXO",
  },
  {
    key: "color",
    label: "COLOR",
  },
  {
    key: "actions",
    label: "ACCIONES",
  },
]

const Pets = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Mascotas
      </h1>
      <section className="w-full sm:px-8 my-10 rounded-lg">
        <ModalButton title='Añadir mascota' />
      </section>
      <main className="w-full sm:px-8">
        <TableComponent rows={rows} columns={columns} />
      </main>
    </main>
  )
}

export default Pets
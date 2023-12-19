import { ModalButton } from '@/components/ModalButton'
import { TableComponent } from '@/components/Table'
import React from 'react'

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    pet: "Camila",
    phone: "04244978681",
    actions: "Acciones"
  },
  {
    key: "2",
    name: "Zoey Lang",
    pet: "Uñañe",
    phone: "04244978681",
    actions: "Acciones"
  },
  {
    key: "3",
    name: "Jane Fisher",
    pet: "Sindy",
    phone: "04244978681",
    actions: "Acciones"
  },
  {
    key: "4",
    name: "William Howard",
    pet: "Commy",
    phone: "04244978681",
    actions: "Acciones"
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
    key: "phone",
    label: "TLFNO",
  },
  {
    key: "actions",
    label: "ACCIONES",
  },
]

const Clients = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Clientes
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

export default Clients
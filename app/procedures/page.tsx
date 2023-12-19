import React from 'react'
import { ModalButton } from '@/components/ModalButton'
import { TableComponent } from '@/components/Table'

const Procedures = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Procedimientos
      </h1>
      <section className="w-full sm:px-8 my-10 rounded-lg">
        <ModalButton />
      </section>
      <main className="w-full sm:px-8 overflow-x-scroll">
        <TableComponent />
      </main>
    </main>
  )
}

export default Procedures
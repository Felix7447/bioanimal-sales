import { LineChartComponent } from '@/components/LineChart'
import { TableComponent } from '@/components/Table'
import React from 'react'

const Sales = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Ventas
      </h1>
      <section className="w-full sm:px-8 my-10 rounded-lg">
        <LineChartComponent />
      </section>
      <main className="w-full sm:px-8 overflow-x-scroll">
        <TableComponent />
      </main>
    </main>
  )
}

export default Sales
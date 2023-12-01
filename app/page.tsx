import { CardComponent } from '@/components/Card'
import { DoughnutChart } from '@/components/DoughnutChart'
import { LineChartComponent } from '@/components/LineChart'
import { TableComponent } from '@/components/Table'

export default function Home() {
  return (
    <>
      <main className="p-4 col-span-12 flex flex-col items-center md:col-span-8 lg:col-span-6 xl:col-span-7">
        <h1 className="text-xl font-bold my-4 self-start">Dashboard</h1>
        <header className="relative flex justify-around w-full mx-2">
          <CardComponent background="#ddf2fe" title="Total" sales={500} />
          <CardComponent background="#eefea2" title="Veterinaria" sales={250} />
          <CardComponent background="#e9ddfc" title="Peluquería" sales={250} />
        </header>
        <main className="w-full my-10 rounded-lg">
          <LineChartComponent />
        </main>
        <footer className="w-full">
          <h3 className="text-xl font-bold text-left">Mejores clientes</h3>
          <section className="bg-base my-4 rounded-2xl dark:bg-neutral">
            <TableComponent />
          </section>
        </footer>
      </main>
      <aside className="min-h-screen p-4 col-span-12 flex flex-col md:col-span-4 lg:col-span-3">
        <main>
          <h3 className="text-xl font-bold text-left my-4">
            Proporción de ventas
          </h3>
          <DoughnutChart />
        </main>
        <footer>
          <h3 className="text-xl font-bold text-left mb-4">
            Últimas ventas
          </h3>
          <TableComponent />
        </footer>
      </aside>
    </>
  )
}

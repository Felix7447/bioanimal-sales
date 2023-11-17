import { CardComponent } from '@/components/Card'
import { ChartComponent } from '@/components/Chart'
import { TableComponent } from '@/components/Table'

export default function Home() {
  return (
    <>
      <main className="p-4 col-span-12 flex flex-col items-center md:col-span-8 lg:col-span-7">
        <h1 className="text-xl font-bold my-4 self-start">Dashboard</h1>
        <header className="relative flex justify-around w-full mx-2">
          <CardComponent background="#ddf2fe" title="Total Sales" sales={500} />
          <CardComponent background="#eefea2" title="Vet Sales" sales={250} />
          <CardComponent background="#e9ddfc" title="Peluq Sales" sales={250} />
        </header>
        <main className="w-full bg-base my-10 rounded-lg">
          <ChartComponent />
        </main>
        <footer className="w-full">
          <h3 className="text-xl font-bold text-left">Top clients</h3>
          <section className="bg-base my-4 rounded-lg">
            <TableComponent />
          </section>
        </footer>
      </main>
      <aside className="min-h-screen p-4 col-span-12 flex flex-col justify-evenly md:col-span-4 lg:col-span-3 border-2 border-black">
        <main>Stats</main>
        <footer>last sales</footer>
      </aside>
    </>
  )
}

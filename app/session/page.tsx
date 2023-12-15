import React from 'react'
import { Avatar } from "@nextui-org/react";

const Session = () => {
  return (
    <main className="min-h-[91vh] w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Mi perfil
      </h1>
      <main className="w-full sm:px-8 my-10 rounded-lg text-center">
        <figure className='flex justify-center mb-8'>
          <Avatar name="Felix" className='w-48 h-48 text-6xl' />
        </figure>
        <h3><strong>Usuario:</strong> Felix Reyna</h3>
        <h3><strong>Rol:</strong> Administrador</h3>
        <button className='bg-danger-400 p-2 text-background font-bold outline-none rounded my-4'>
          Cerrar sesión
        </button>
      </main>
    </main>
  )
}

export default Session
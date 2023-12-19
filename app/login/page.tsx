import React from 'react'
import { Input, Button } from "@nextui-org/react";
import Link from 'next/link';

const Login = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Log In
      </h1>
      <form className='w-1/3 flex flex-col gap-4'>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button size="md" color='default'>
          Log In
        </Button>
        <Link href="/signup" className='text-blue-600 underline text-center'>
          ¿No tienes cuenta? Regístrate.
        </Link>
      </form>
    </main>
  )
}

export default Login

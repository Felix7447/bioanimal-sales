import React from 'react'
import { Input, Button } from "@nextui-org/react"

const Signup = () => {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10">
      <h1 className="text-xl font-bold my-4">
        Sign Up
      </h1>
      <form className='w-1/3 flex flex-col gap-4'>
        <Input type="text" label="Name" />
        <Input type="text" label="Last name" />
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Input type="password" label="Repeat Password" />
        <Button size="md" color='default'>
          Sign Up
        </Button>
      </form>
    </main>
  )
}

export default Signup

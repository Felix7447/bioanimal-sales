import React from 'react'
import { Button } from '@nextui-org/react'

import { DashboardIcon } from '@/assets/icons/DashboardIcon';
import { UserIcon } from '@/assets/icons/UserIcon';
import { ClientsIcon } from '@/assets/icons/ClientsIcon';
import { RocketIcon } from '@/assets/icons/RocketIcon';
import { HeartIcon } from '@/assets/icons/HeartIcon';
import { ScissorsIcon } from '@/assets/icons/ScissorsIcon';

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Ventas", icon: <RocketIcon /> },
  { name: "Clientes", icon: <ClientsIcon /> },
  { name: "Mascotas", icon: <HeartIcon /> },
  { name: "Procedimientos", icon: <ScissorsIcon /> },
  { name: "Sesión", icon: <UserIcon /> }
];

export const MenuComponent = () => {
  return (
    <nav
      className="bg-base dark:bg-darkbase dark:border-r-1 dark:border-text h-full hidden min-w-fit lg:block lg:col-span-3 xl:col-span-2 p-4"
    >
      <ul className="sticky text-medium top-0 flex flex-col items-start">
        {menuItems.map((item, index) => (
          <li key={`${item.name}-${index}`} className="my-1 px-4 w-full">
            <Button className='w-full justify-start bg-transparent hover:bg-darkbase dark:hover:bg-background dark:hover:text-darkbase hover:text-base duration-250' startContent={item.icon}>
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

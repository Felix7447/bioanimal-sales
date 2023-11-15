import { UserIcon } from '@/assets/icons/UserIcon';
import { Button } from '@nextui-org/react'
import React from 'react'

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Log Out",
];

export const MenuComponent = () => {
  return (
    <nav
      className="bg-base h-screen hidden lg:block lg:col-span-2 p-4"
    >
      <ul className="flex-col">
        {menuItems.map((item, index) => (
          <li key={`${item}-${index}`} className="my-2">
            <Button className='bg-transparent hover:bg-black hover:text-base duration-250' startContent={<UserIcon />}>
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

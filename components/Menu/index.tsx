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
      className="bg-base h-full hidden lg:block lg:col-span-2 p-4"
    >
      <ul className="sticky top-20 flex flex-col items-start">
        {menuItems.map((item, index) => (
          <li key={`${item}-${index}`} className="my-1 px-4 w-full">
            <Button className='w-full justify-start bg-transparent hover:bg-black hover:text-base duration-250' startContent={<UserIcon />}>
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

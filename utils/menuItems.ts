import { DashboardIcon } from '@/assets/icons/DashboardIcon'
import { UserIcon } from '@/assets/icons/UserIcon'
import { ClientsIcon } from '@/assets/icons/ClientsIcon'
import { RocketIcon } from '@/assets/icons/RocketIcon'
import { HeartIcon } from '@/assets/icons/HeartIcon'
import { ScissorsIcon } from '@/assets/icons/ScissorsIcon'

export const menuItems = [
  { name: "Dashboard", icon: DashboardIcon, path: '/' },
  { name: "Ventas", icon: RocketIcon, path: '/sales' },
  { name: "Clientes", icon: ClientsIcon, path: '/clients' },
  { name: "Mascotas", icon: HeartIcon, path: '/pets' },
  { name: "Procedimientos", icon: ScissorsIcon, path: '/procedures' },
  { name: "Sesión", icon: UserIcon, path: '/session' }
]
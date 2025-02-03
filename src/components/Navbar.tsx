'use client'

import { cn } from '@/lib/utils'
import {
  HomeIcon,
  User,
  LightbulbIcon,
  GraduationCap,
  FolderGit2,
  Mail,
  MoreHorizontal,
  Sun,
  Moon
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Dock, DockIcon, DockItem, DockLabel } from './animation/DockAnimation'
import Link from 'next/link'
import { match } from 'ts-pattern'
import { useTheme } from 'ahooks'

const data = [
  {
    title: '主页',
    icon: <HomeIcon className="size-full" />,
    href: '/'
  },
  {
    title: '关于',
    icon: <User className="size-full" />,
    href: '/about'
  },
  {
    title: '技能',
    icon: <LightbulbIcon className="size-full" />,
    href: '/skills'
  },
  {
    title: '教育',
    icon: <GraduationCap className="size-full" />,
    href: '/education'
  },
  {
    title: '项目',
    icon: <FolderGit2 className="size-full" />,
    href: '/projects'
  },
  {
    title: '联系',
    icon: <Mail className="size-full" />,
    href: '/contact'
  },
  {
    title: '更多',
    icon: <MoreHorizontal className="size-full" />,
    href: '/more'
  }
]

function Navbar() {
  const pathname = usePathname()

  const { theme, setThemeMode } = useTheme({ localStorageKey: 'theme' })

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[9999]">
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                'aspect-square rounded-full bg-gray-200 dark:bg-neutral-800',
                pathname === item.href && 'bg-gray-100 !border !border-primary-sky'
              )}>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === item.href ? 'text-[--primary-sky]' : 'text-foreground')}>
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}

        <div onClick={() => setThemeMode(theme === 'light' ? 'dark' : 'light')}>
          <DockItem className={cn('aspect-square rounded-full bg-gray-200 dark:bg-neutral-800')}>
            <DockLabel>{theme === 'light' ? '白天' : '黑夜'}</DockLabel>
            <DockIcon className="text-foreground">
              {match(theme)
                .with('dark', () => <Moon className="text-[--primary]" />)
                .with('light', () => <Sun className="text-[--primary]" />)
                .otherwise(() => null)}
            </DockIcon>
          </DockItem>
        </div>
      </Dock>
    </div>
  )
}

export default Navbar

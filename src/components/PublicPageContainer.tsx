'use client'

import { cn } from '@/lib/utils'
import { useResponsive } from 'ahooks'

export interface PublicPageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function PublicPageContainer({
  children,
  className,
  ...restProps
}: PublicPageContainerProps) {
  const { md } = useResponsive()

  return (
    <div
      className={cn('h-[calc(100vh-30px)] w-full pt-14 pb-4', md ? 'px-40' : 'px-4', className)}
      {...restProps}>
      {children}
    </div>
  )
}

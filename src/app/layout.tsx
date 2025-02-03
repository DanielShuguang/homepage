'use client'

import './globals.css'
import MinInfoBar from '@/components/MinInfoBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'
import { match } from 'ts-pattern'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="zh-cn">
      <body>
        <main className="bg-[--muted] size-full overflow-auto">
          {match(pathname)
            .when(
              path => path.startsWith('/admin'),
              () => null
            )
            .otherwise(() => (
              <>
                <Navbar />
                <MinInfoBar />
              </>
            ))}
          <div className="min-h-[calc(100%-30px)]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}

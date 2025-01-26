import type { Metadata } from 'next'
import './globals.css'
import MinInfoBar from '@/components/MinInfoBar'
import { siteConfig } from './siteConfig'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.webTitle,
    template: `%s - ${siteConfig.webTitle}`
  },
  description: siteConfig.description,

  // SEO 关键词
  keywords: [
    '胡曙光',
    'Daniel Hu',
    'Daniel',
    '前端工程师',
    '前端开发',
    '前端',
    'Vue',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Web',
    'Webpack',
    'Node',
    '开发者',
    'developer',
    'website',
    'blog',
    '网站',
    '博客'
  ],
  authors: [{ name: '胡曙光', url: 'https://github.com/DanielShuguang' }],
  creator: '胡曙光',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.webTitle,
    description: siteConfig.description,
    siteName: siteConfig.webTitle
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.webTitle,
    description: siteConfig.description,
    creator: '@DanielHu'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-cn">
      <body>
        <main className="bg-[--muted] size-full overflow-auto">
          <Navbar />
          <MinInfoBar />
          <div className="min-h-[calc(100%-30px)]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}

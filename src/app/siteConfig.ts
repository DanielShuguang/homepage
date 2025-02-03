import { Metadata } from 'next'

export const siteConfig = {
  webTitle: '胡曙光的个人站',
  creator: '胡曙光',
  creatorEn: 'Daniel Hu',
  description: '我是一个前端工程师',
  ogImage: 'https://mdTaquiImam.vercel.app/og-image.png',
  // 此为网站的根路径
  url: 'https://mdTaquiImam.vercel.app'
}

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

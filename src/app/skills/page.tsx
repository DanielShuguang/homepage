import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import PublicPageContainer from '@/components/PublicPageContainer'
import SkillsFooter from '@/components/SkillsFotter'
import { Badge } from '@/components/ui/badge'
import { LightbulbIcon } from 'lucide-react'
import React from 'react'

export default function Skills() {
  const programmingLanguages = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Rust',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'
    },
    {
      name: 'Go',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
    },
    {
      name: 'Dart',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
    }
  ]

  const frameworks = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Vue',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Tauri',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg'
    },
    {
      name: 'Electron',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg'
    },
    {
      name: 'Material UI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    }
  ]

  const tools = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Web assembly',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg'
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Playwright',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg'
    },
    {
      name: 'Vite tool chains',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
    }
  ]

  return (
    // SKILLS PAGE
    <PublicPageContainer>
      <div className="size-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <LightbulbIcon className="w-4 h-4" />
          我的技能
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>我的技术经验/技能</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              作为一名经验丰富的前端开发者，我熟练掌握 HTML、CSS、JavaScript
              等核心前端技术，能够打造兼具美观与高效的用户界面。在 React、Vue
              等主流框架的运用上，我也积累了深厚的实践经验，曾主导多个复杂项目的前端架构搭建与开发，确保项目在性能优化、响应式设计及用户交互体验上都达到行业领先水平。我热衷于探索前沿技术，不断将新的理念融入工作，致力于为用户带来极致的前端体验。
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              编程语言
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={programmingLanguages} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              框架/库
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={frameworks} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              工具 & 技术
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={tools} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </PublicPageContainer>
  )
}

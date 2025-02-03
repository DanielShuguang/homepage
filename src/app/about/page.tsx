import { Badge } from '@/components/ui/badge'
import { Circle, Heart, User2 } from 'lucide-react'
import Aboutfooter from '@/components/Aboutfooter'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import PublicPageContainer from '@/components/PublicPageContainer'

export default function About() {
  const items = [
    { hobby: '写代码' },
    { hobby: '玩游戏' },
    { hobby: '轻微二次元' },
    { hobby: '研究新技术' },
    { hobby: '捣鼓一点有意思的东西' }
  ]

  return (
    <PublicPageContainer>
      <div className="size-full relative flex flex-col items-start justify-center gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <User2 className="h-4 w-4" />
          关于我
        </Badge>
        <div className="flex flex-col gap-5">
          <Heading>
            软件工程师 <br /> 前端开发者，定居中国。
          </Heading>

          <FramerWrapper y={0} x={100}>
            <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
              一名来自中国湖南省的全栈 Web 开发人员。喜欢做 Web
              相关项目，制作一些玩具或者工具项目提升自己的开发效率。专注于现代 JavaScript
              框架和响应式 CSS
              设计，致力于创建精美、用户友好的界面。我注重细节并高效交付，构建结合功能与优雅设计的无缝
              Web 体验。
            </p>
          </FramerWrapper>
        </div>
        <FramerWrapper
          className="w-full flex flex-row justify-between max-lg:flex-col "
          y={100}
          delay={0.3}>
          <Aboutfooter />
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
            <Heart className="h-8 w-8" /> 爱好
          </h1>
          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
            {items.map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start ">
                  <Circle className="h-3 w-3" /> {val.hobby}
                </div>
              )
            })}
          </div>
        </FramerWrapper>
      </div>
    </PublicPageContainer>
  )
}

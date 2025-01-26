'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useAnimationControls } from 'motion/react'
import { useState } from 'react'
import { useMemoizedFn, useMount } from 'ahooks'
import { delay } from '@/lib/utils'
import { siteConfig } from '@/app/siteConfig'
import { DownloadCloud, User } from 'lucide-react'

const tags = ['前端工程师', 'Rustacean', 'Gopher', '游戏爱好者', '生活不能没有耳机']

const MinInfoBar = () => {
  const [currentActiveTag, setCurrentActiveTag] = useState(0)
  const [showInfoBar, setShowInfoBar] = useState(false)

  const controls = useAnimationControls()

  const autoChangeTag = useMemoizedFn(async () => {
    await controls.start({ width: 'max-content', transition: { delay: 1 } })
    await delay(1000)
    await controls.start({ width: 0, transition: { delay: 1 } })
    setCurrentActiveTag(prev => (prev + 1) % tags.length)
    autoChangeTag()
  })

  useMount(() => {
    autoChangeTag()
  })

  return (
    <>
      <div className="fixed left-0 top-[50%] size-[50px] -translate-y-1/2 bg-[--background] rounded-2xl">
        <div
          role="button"
          className="flex items-center justify-center user-info size-full cursor-pointer"
          onClick={() => setShowInfoBar(pre => !pre)}>
          <User />
        </div>
      </div>
      <AnimatePresence>
        {showInfoBar && (
          <motion.div
            className="fixed left-[55px] top-[50%] w-full max-w-[22.75rem] bg-transparent"
            initial={{ opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, x: 0, y: '-50%' }}
            exit={{ opacity: 0, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.5 }}>
            <div className="p-3 mb-3 overflow-hidden bg-[--background] rounded-2xl">
              <div className="mx-4 mt-12 text-center user-info lg:mx-6">
                <Link
                  href="/"
                  className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[--border] overflow-hidden rounded-full">
                  <Image
                    src="/user-sidebar-thumb.png"
                    className="w-full h-full rounded-full"
                    width="144"
                    height="144"
                    alt="Daniel Hu"
                  />
                </Link>
                <h6 className="mb-1 text-lg font-semibold text-[--foreground]">
                  {siteConfig.creator} - {siteConfig.creatorEn}
                </h6>
                <div className="leading-none text-[--primary-sky] flex justify-center">
                  <motion.h6
                    className="text-sm h-[20px] overflow-hidden border-r border-solid border-[--primary-sky]"
                    animate={controls}>
                    <span className="mr-[10px]">{tags[currentActiveTag]}</span>
                  </motion.h6>
                </div>
              </div>
              <div className="pt-6 mx-4 border-t lg:mx-6 md:mx-7 my-7 border-[--border]">
                <ul className="flex flex-col justify-between space-y-3 text-[--foreground]">
                  <li className="flex text-sm">
                    <span className="flex-1 font-medium">定居:</span>
                    <span>中国</span>
                  </li>
                  <li className="flex text-sm">
                    <span className="flex-1 font-medium">城市:</span>
                    <span>湖南长沙</span>
                  </li>
                  <li className="flex text-sm">
                    <span className="flex-1 font-medium">年龄:</span>
                    <span>{new Date().getFullYear() - 1997}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  className="text-center text-white bg-[--primary-sky] text-sm flex items-center justify-center gap-2 rounded-[2.5rem] py-3.5 transition duration-300 text-[15px] font-semibold"
                  href="/">
                  下载简历
                  <span className="animate-bounce">
                    <DownloadCloud size="18" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MinInfoBar

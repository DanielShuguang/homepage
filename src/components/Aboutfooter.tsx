import { Circle, Dna, Globe2, Languages } from 'lucide-react'

const Aboutfooter = () => {
  const items = [
    { name: '语言', answer: '中文和一点英文', icon: <Languages className="h-11 w-11" /> },
    { name: '国籍', answer: '中国', icon: <Globe2 className="h-8 w-8" /> },
    { name: '性别', answer: '男', icon: <Dna className="h-8 w-8" /> }
  ]

  return (
    <>
      {items.map((val, indx) => {
        return (
          <div className="p-1 w-fit relative" key={indx}>
            <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
              {val.icon}
              {val.name}
            </h1>
            <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
              <Circle className="h-3 w-3" /> {val.answer}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Aboutfooter

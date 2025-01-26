export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-[--ring]">
      <div>
        <h1 className="inline-block m-[0_20px_0_0] p-[0_23px_0_0] text-[24px] font-[500] align-top leading-[49px] border-solid border-r border-[--ring]">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-[14px] font-[400] leading-[49px] m-0">找不到页面</h2>
        </div>
      </div>
    </div>
  )
}

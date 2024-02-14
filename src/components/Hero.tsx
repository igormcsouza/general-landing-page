import { Button } from "./shared"

export default function Hero() {
  return (
    <section className="max-w-5xl md:h-[48rem] flex flex-col-reverse md:flex-row lg:mx-auto mx-4 lg:px-4 items-center gap-12">
      <div className="flex flex-col gap-6 justify-center items-start">
        <h1 className="text-5xl leading-[56px] font-bold">Write your Landing Title</h1>
        <p className="text-base font-normal leading-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        <div className="flex gap-6">
          <Button buttonType="primary">Authors</Button>
          <Button buttonType="neutral">Check demo</Button>
        </div>
      </div>
      <div className="bg-zinc-400 w-96 h-96 flex items-center justify-center rounded-md">
        <p className="text-basic-middle text-opacity-80">Placeholder</p>
      </div>
    </section>
  )
}

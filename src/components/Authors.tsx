import MarkHeadersFace from "../assets/mark-headers-face.svg"

export default function Authors() {
  return (
    <section className="flex flex-col mx-auto mb-36 items-center gap-9">
      <div className="flex flex-col text-center gap-3 max-w-xl">
        <h1 className="text-basic-darker text-4xl font-semibold leading-tight">
          Authors
        </h1>
        <p className="text-basic-middle text-base font-normal leading-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-28 gap-8 md:justify-center md:mx-28 mx-4">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          <picture>
            <img className="max-w-none w-28 h-28" src={MarkHeadersFace} alt="Mark Headers Face" />
          </picture>
          <div className="text-left">
            <h2 className="text-basic-darker text-2xl font-semibold">Mark Headers</h2>
            <h3 className="text-basic-middle text-xl font-medium mb-3">Graphic designer</h3>
            <p className="text-basic-middle text-base font-normal leading-5 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic repellendus beatae dolorum, ad modi deleniti! Illo, odit voluptatem explicabo aut nobis nostrum repellendus aliquid quis mollitia atque non? Earum.
            </p>
            <div>
              social medias
            </div>
          </div>
        </div>
        <div>
          <h1>Mark Headers</h1>
          <h2>Graphic designer</h2>
        </div>
      </div>
    </section>
  )
}

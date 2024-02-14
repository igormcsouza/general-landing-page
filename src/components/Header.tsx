import { Button } from "./shared";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-3 py-4">
      <div>
        <p className="text-2xl font-bold md:text-left text-center">
          Landingpage <br />
          Logotype
        </p>
      </div>
      <nav className="flex flex-col md:flex-row items-center gap-8">
        <ul className="flex flex-wrap justify-center items-center gap-6 text-xl leading-6 font-medium">
          <li><Button className="p-0" buttonType="basic">Authors</Button></li>
          <li><Button className="p-0" buttonType="basic">For who</Button></li>
          <li><Button className="p-0" buttonType="basic">Check demo</Button></li>
          <li><Button className="p-0" buttonType="basic">Opinions</Button></li>
        </ul>
        <Button className="text-xl" buttonType="secondary"> Buy now! </Button>
      </nav>
    </header>
  )
}

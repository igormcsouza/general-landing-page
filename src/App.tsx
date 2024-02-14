import {
  Header,
  Hero,
  Authors,
  Forwho,
  Checkdemo,
  Opinions,
  Footer
} from './components'

function App() {
  return (
    <main className="font-poppins md:space-y-0 space-y-8">
      <Header />
      <Hero />
      <Authors />
      <Forwho />
      <Checkdemo />
      <Opinions />
      <Footer />
    </main>
  )
}

export default App

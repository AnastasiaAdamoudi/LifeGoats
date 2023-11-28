import { Hero, About, EventOverview, Details, Location, Program, Parallax, Contact } from "./";

const LandingPage = () => {
  return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero /> 
        <About />
        <EventOverview />
        <Details />
        <Location />
        <Program />
        <Parallax />
        <Contact />
      </div>
  )
}

export default LandingPage;
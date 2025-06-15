import { lazy, Suspense } from "react"
const Contact = lazy(() => import("./Components/Contact.jsx"))
const Hero = lazy(() => import("./Components/Hero.jsx"))
const Marquee = lazy(() => import("./Components/Marquee.jsx"))
const Navbar = lazy(() => import("./Components/Navbar.jsx"))
const About = lazy(() => import("./Components/About.jsx"));
const Projects = lazy(() => import("./Components/Projects.jsx"))
const Work = lazy(() => import("./Components/Work.jsx"))

function App() {
  return (
    <Suspense fallback={<div className=" bg-black text-white w-full h-[100dvh] flex-center font-bold text-4xl">Loading...</div>}>
      <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Navbar/>
        <Hero/>
        <Marquee/>
        <Projects/>
        <About/>
        <Work/>
        <Contact/>
      </main>
    </Suspense>
  )
}

export default App

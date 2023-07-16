import About from "./components/About/About"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Stacks from "./components/Stacks/Stacks"
import Contact from "./components/Contact/Contact"
const App = ()=>{
  return (
    <main>
      <Home/>
      <Stacks/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App

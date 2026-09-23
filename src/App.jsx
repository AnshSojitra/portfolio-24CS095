import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Header name="24CS095" themeColor="#7c3aed" />
      <About />
      <Skills skillList={["HTML", "CSS", "JS", "React"]} />
      <Projects />
      <Footer />
    </>
  )
}

export default App

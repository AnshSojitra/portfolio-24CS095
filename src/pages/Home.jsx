import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

function Home() {
  return (
    <>
      <Header name="ANSH SOJITRA" themeColor="#7c3aed" />
      <About />
      <Skills skillList={["HTML", "CSS", "JS", "React"]} />
    </>
  )
}

export default Home

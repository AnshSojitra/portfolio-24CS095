import { useState, useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

const API_URL = 'http://localhost:5000/api/skills'

function Home() {
  const [skills, setSkills] = useState(["HTML", "CSS", "JS", "React"])

  useEffect(() => {
    let ignore = false

    const fetchSkills = async () => {
      try {
        const res = await fetch(API_URL)
        if (res.ok) {
          const json = await res.json()
          if (!ignore && json.data) {
            const names = json.data.map((s) => s.name)
            if (names.length > 0) setSkills(names)
          }
        }
      } catch {
        // fallback to hardcoded skills silently
      }
    }

    fetchSkills()
    return () => { ignore = true }
  }, [])

  return (
    <>
      <Header name="ANSH SOJITRA" themeColor="#7c3aed" />
      <About />
      <Skills skillList={skills} />
    </>
  )
}

export default Home

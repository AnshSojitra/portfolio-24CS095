import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import RepositoryCard from './RepositoryCard'

const GITHUB_USERNAME = 'AnshSojitra'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchRepos = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(GITHUB_API_URL)
      if (!response.ok) {
        throw new Error(`Unable to load repositories (HTTP ${response.status}).`)
      }
      const data = await response.json()
      if (!Array.isArray(data)) {
        throw new Error('Unable to load repositories.')
      }
      setRepos(data)
    } catch (err) {
      setError(err.message || 'Unable to load repositories.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let ignore = false

    const loadInitialRepos = async () => {
      try {
        const response = await fetch(GITHUB_API_URL)
        if (!response.ok) {
          throw new Error(`Unable to load repositories (HTTP ${response.status}).`)
        }
        const data = await response.json()
        if (!ignore) {
          if (!Array.isArray(data)) {
            throw new Error('Unable to load repositories.')
          }
          setRepos(data)
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Unable to load repositories.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadInitialRepos()

    return () => {
      ignore = true
    }
  }, [])

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        Explore my open-source GitHub repositories fetched in real time.
      </p>

      {loading && <Spinner message="Loading repositories..." />}

      {!loading && error && (
        <ErrorMessage message={error} onRetry={fetchRepos} />
      )}

      {!loading && !error && (
        <>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search repositories by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search repositories"
            />
          </div>

          {filteredRepos.length > 0 ? (
            <div className="projects-grid">
              {filteredRepos.map((repo) => (
                <RepositoryCard key={repo.id || repo.name} repo={repo} />
              ))}
            </div>
          ) : (
            <p className="empty-state">No repositories found.</p>
          )}
        </>
      )}
    </section>
  )
}

export default Projects

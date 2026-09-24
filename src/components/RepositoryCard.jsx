function RepositoryCard({ repo }) {
  return (
    <div className="project-card repo-card">
      <div className="repo-header">
        <h3 className="repo-name">{repo.name}</h3>
        <span className="repo-stars" title="GitHub Stars">
          ★ {repo.stargazers_count}
        </span>
      </div>

      <p className="repo-desc">
        {repo.description || 'No description provided.'}
      </p>

      {repo.language && (
        <span className="repo-language">
          <span className="lang-dot"></span>
          {repo.language}
        </span>
      )}

      <div className="repo-links">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default RepositoryCard

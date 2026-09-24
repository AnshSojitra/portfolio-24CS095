function ErrorMessage({ message = 'Unable to load repositories.', onRetry }) {
  return (
    <div className="error-container" role="alert">
      <p className="error-text">⚠️ {message}</p>
      {onRetry && (
        <button type="button" className="retry-btn" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorMessage

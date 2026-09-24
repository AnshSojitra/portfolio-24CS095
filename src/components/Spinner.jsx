function Spinner({ message = 'Loading repositories...' }) {
  return (
    <div className="spinner-container" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true"></div>
      <p className="spinner-text">{message}</p>
    </div>
  )
}

export default Spinner

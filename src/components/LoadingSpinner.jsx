import PropTypes from 'prop-types'
import './LoadingSpinner.css'

function LoadingSpinner({ message }) {
  return (
    <div className="wrapper">
      <div className="spinner" />
      {message && <p className="message">{message}</p>}
    </div>
  )
}

LoadingSpinner.propTypes = {
  message: PropTypes.string,
}

LoadingSpinner.defaultProps = {
  message: '',
}

export default LoadingSpinner
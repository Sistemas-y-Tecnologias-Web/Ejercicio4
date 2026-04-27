import { Link } from "react-router-dom"
import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-overlay">

        <h1 className="notfound-code">404</h1>

        <h2 className="notfound-title">
          MISSION FAILED
        </h2>

        <p className="notfound-text">
          The objective you’re looking for doesn’t exist or has been eliminated.
        </p>

        <Link to="/" className="notfound-btn">
          RETURN TO BASE
        </Link>

      </div>
    </div>
  )
}
import './HeroCard.css'
import PropTypes from 'prop-types'

export default function HeroCard({ heroKey, name, portrait, role }) {
    return (
        <div className="card">
            <img
                src={portrait}
                alt={heroKey}
                className="" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["tank, damage", "support"]).isRequired,
    heroKey: PropTypes.string.isRequired,
}
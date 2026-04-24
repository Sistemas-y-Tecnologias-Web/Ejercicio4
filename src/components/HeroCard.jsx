import { Link } from 'react-router-dom'
import './HeroCard.css'
import PropTypes from 'prop-types'

function HeroCard({ heroKey, name, portrait, role }) {
    let cssClass = 'card'
    
    if (role === 'tank') {
        cssClass += ' tank'
    } else {
        if (role === 'support') {
            cssClass += ' support'
        }else{
            cssClass += ' damage'
        }
    }

    return (
        <Link to={`/heroes/${heroKey}`} className={cssClass}>
            <img
                src={portrait}
                alt={heroKey}
                className="" />
            <h3>{name}</h3>
            <p>{role}</p>
        </Link>
    )
}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["tank", "damage", "support"]).isRequired,
    heroKey: PropTypes.string.isRequired,
}

export default HeroCard;
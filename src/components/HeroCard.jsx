import './HeroCard.css'

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
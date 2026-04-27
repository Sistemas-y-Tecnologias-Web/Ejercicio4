import { Link, useNavigate } from "react-router-dom"
import { useHeroes } from "../hooks/useHeroes"
import './Home.css'

export default function Home() {
    const { heroes } = useHeroes()
    const navigate = useNavigate()

    function goToRandomHero() {
        if (heroes.length === 0) return
        const random = heroes[Math.floor(Math.random() * heroes.length)]
        navigate(`/heroes/${random.key}`)
    }

    return (
        <>
            <header className="home-header">
                <h1>Overwatch wiki</h1>
                <p>Explore all the agents of Overwatch</p>
                <div className="actions">
                    <Link to="/heroes" className="btn primary">
                        See all heroes
                    </Link>
                    <button onClick={goToRandomHero} className="btn secondary">
                        See random hero
                    </button>
                </div>
            </header>
        </>
    )
}
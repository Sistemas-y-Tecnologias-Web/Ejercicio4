import { Link, useNavigate } from "react-router-dom"
import { useHeroes } from "../hooks/useHeroes"
import NavBar from "../components/NavBar"
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
            <NavBar />
            <header>
                <h1>Overwatch wiki</h1>
                <p>Explora el roster completo de héroes de Overwatch</p>
                <div className="actions">
                    <Link to="/heroes" className="btn primary">
                        Ver todos los héroes
                    </Link>
                    <button onClick={goToRandomHero} className="btn secondary">
                        Ver un héroe aleatorio
                    </button>
                </div>
            </header>
        </>
    )
}
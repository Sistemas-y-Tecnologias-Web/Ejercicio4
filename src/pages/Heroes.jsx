import { useHeroes } from "../hooks/useHeroes";
import HeroCard from '../components/HeroCard'
import './Heroes.css'

export default function Heroes() {
    const { heroes, loading, error } = useHeroes()

    if (loading) return <p>Cargando heroes.....</p>

    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div className="heroes-container">
                {heroes.map((hero) => (
                    <HeroCard
                        key={hero.key}
                        heroKey={hero.key}
                        name={hero.name}
                        portrait={hero.portrait}
                        role={hero.role} />
                ))}
            </div>
        </>
    )
}
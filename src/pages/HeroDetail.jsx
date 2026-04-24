import { useParams } from "react-router-dom"
import { useHero } from "../hooks/useHeroes"
import './HeroDetail.css'

export default function HeroDetail() {
    const { key } = useParams()
    const { hero, loading, error } = useHero(key)

    if (loading) return <p>Cargandooo...</p>

    if (error) return <p>Error al cargar</p>

    console.log(hero)
    return (
        <>
            <header>
                <img src={hero.backgrounds[2].url} alt="" />
                <h1 className="agent-title">{hero.name}</h1>
            </header>
        </>
    )
}
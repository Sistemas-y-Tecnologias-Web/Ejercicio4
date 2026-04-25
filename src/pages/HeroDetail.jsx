import { useParams } from "react-router-dom"
import { useHero } from "../hooks/useHeroes"
import TabContainer from "../components/TabContainer"
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
                <h1 className="agent-title" style={
                    {backgroundImage: `url(${hero.backgrounds[2].url})`}
                }>{hero.name}</h1>
                <p className="about">{hero.description}</p>
                <h2>Abilities</h2>
                <TabContainer hero={hero}/>
            </header>
        </>
    )
}
import { useParams } from "react-router-dom"
import { useHero } from "../hooks/useHeroes"
import TabContainer from "../components/TabContainer"
import './HeroDetail.css'
import NotFound from "./NotFound"

export default function HeroDetail() {
    const { key } = useParams()
    const { hero, loading, error } = useHero(key)

    if (loading) return <p>Cargandooo...</p>

    if (error) return <p>Error al cargar</p>

    if (!hero || !hero.name) {
        return <NotFound />
    }
    const getYouTubeId = (url) => {
        try {
            const parsed = new URL(url)

            if (parsed.searchParams.get("v")) {
                return parsed.searchParams.get("v")
            }

            const parts = parsed.pathname.split("/")
            return parts.filter(Boolean).pop()
        } catch {
            return null
        }
    }

    const videoId = getYouTubeId(hero.story.media.link)

    return (
        <>
            <header>
                <h1 className="agent-title" style={
                    { backgroundImage: `url(${hero.backgrounds[2].url})` }
                }>{hero.name}</h1>
                <p className="about">{hero.description}</p>
                <h2>Abilities</h2>
                <TabContainer hero={hero} />
                <h2>{hero.name} story</h2>
                <p className="about">{hero.story.summary}</p>

                <iframe
                    src={videoId ? `https://www.youtube.com/embed/${videoId}` : ""}
                    frameBorder="0"
                    width="100%"
                    height="800"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Hero Video"
                />

            </header>
        </>
    )
}
import { useHeroes } from "./hooks/useHeroes"
import HeroCard from "./components/HeroCard"

function App() {
  const { heroes, loading, error } = useHeroes()

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      {heroes.map(hero => (
        <HeroCard
          key={hero.key}
          name={hero.name}
          portrait={hero.portrait}
          role={hero.role}
        />
      ))}
    </>
  )
}

export default App
import { createContext, useContext, useEffect, useState } from "react";
import { fetchHeroes } from "../services/heroesService";

const HeroesContext = createContext(null)

export function HeroesProvider({ children }) {
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false

        async function load() {
            try {
                setLoading(true)
                setError(null)
                const data = await fetchHeroes()
                if (!cancelled) setHeroes(data)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()
        return () => { cancelled = true }
    }, [])

    return (
        <HeroesProvider.Provider value={{ heroes, loading, error }}>
            {children}
        </HeroesProvider.Provider>
    )
}

export function useHeroesContext() {
    const ctx = useContext(HeroesContext)
    if (!ctx) throw new Error('useHeroesContext must be used inside HeroesProvider')
    return ctx
}
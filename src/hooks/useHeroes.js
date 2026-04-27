import { useState, useEffect } from "react";
import { fetchHeroes, fetchHeroDataByKey } from "../services/heroesService.js";

export function useHeroes() {
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

    return { heroes, loading, error }
}

export function useHero(key) {
    const [hero, setHero] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!key) return
        let cancelled = false

        async function load() {
            try {
                setLoading(true)
                setError(null)
                const data = await fetchHeroDataByKey(key)
                if (!cancelled) setHero(data)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()
        return () => { cancelled = true }
    }, [key])

    return { hero, loading, error }
}
import { useHeroes } from "../hooks/useHeroes";
import HeroCard from '../components/HeroCard'
import './Heroes.css'
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Heroes() {
    const { heroes, loading, error } = useHeroes()
    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')

    const heroesFiltered = heroes.filter(hero => {
        const matchRole = filter === "all" || hero.role === filter
        const matchName = hero.name.toLowerCase().includes(search.toLowerCase())
        return matchRole && matchName
    })

    if (loading) return <LoadingSpinner message="Loading heroes..."/>

    if (error) return <p>Error: {error}</p>

    return (
        <div className="cards-container">
            <h1>Overwatch heroes</h1>
            <div className="filters">
                <div className="search">
                    <label htmlFor="">Search by name: </label>
                    <input 
                    type="text" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className="combo-box">
                    <label htmlFor="select">Filter by roles:</label>
                    <select name="" id="role-select"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="damage">Damage</option>
                        <option value="tank">Tank</option>
                        <option value="support">Support</option>
                    </select>
                </div>
            </div>
            <div className="heroes-container">
                {heroesFiltered.map((hero) => (
                    <HeroCard
                        key={hero.key}
                        heroKey={hero.key}
                        name={hero.name}
                        portrait={hero.portrait}
                        role={hero.role} />
                ))}
            </div>
        </div>
    )
}
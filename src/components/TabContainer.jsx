import { useState } from "react";
import Tab from "./Tab";
import './TabContainer.css'

export default function TabContainer({ hero }) {
    const [activeAbility, setActiveAbility] = useState(hero.abilities[0].name)
    const [ability, setAbility] = useState(hero.abilities[0])
    const [flippedCard, setFlippedCard] = useState(null)

    function handleAbility(tab) {
        setActiveAbility(tab.name)
        setAbility(hero.abilities.find(ability => ability.name === tab.name))
    }

    const handleFlip = (abilityName) => {
        setFlippedCard(flippedCard === abilityName ? null : abilityName)
    }

    return (
        <section id="abilities">
            {/* Desktop: Tabs original */}
            <div className="tab-container desktop-tabs">
                {hero.abilities.map((tab) => (
                    <Tab
                        key={tab.name}
                        tabs={tab}
                        activeTab={activeAbility}
                        setActiveTab={() => handleAbility(tab)}
                    />
                ))}
            </div>
            <div className="info-container desktop-tabs">
                <div className="abilities">
                    <h1>{ability.name}</h1>
                    <p>{ability.description}</p>
                    <video src={ability.video.link.webm} controls></video>
                </div>
                <div className="points">
                    <h1>Hitpoints</h1>
                    <h4>Armor: {hero.hitpoints.armor}</h4>
                    <h4>Health: {hero.hitpoints.health}</h4>
                    <h4>Shields: {hero.hitpoints.shields}</h4>
                    <h4>Total: {hero.hitpoints.total}</h4>
                </div>
            </div>

            {/* Mobile: Flip cards */}
            <div className="ability-cards-container mobile-cards">
                {hero.abilities.map((ability) => (
                    <div 
                        key={ability.name} 
                        className={`flip-card ${flippedCard === ability.name ? 'flipped' : ''}`}
                        onClick={() => handleFlip(ability.name)}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={ability.icon} alt={ability.name} />
                                <h3>{ability.name}</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>{ability.description}</p>
                                {ability.video?.link?.webm && (
                                    <video src={ability.video.link.webm} controls></video>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hitpoints-container mobile-cards">
                <h2>Hitpoints</h2>
                <div className="hitpoints-grid">
                    <div className="hitpoint-item">
                        <span className="hp-label">Armor</span>
                        <span className="hp-value">{hero.hitpoints.armor}</span>
                    </div>
                    <div className="hitpoint-item">
                        <span className="hp-label">Health</span>
                        <span className="hp-value">{hero.hitpoints.health}</span>
                    </div>
                    <div className="hitpoint-item">
                        <span className="hp-label">Shields</span>
                        <span className="hp-value">{hero.hitpoints.shields}</span>
                    </div>
                    <div className="hitpoint-item total">
                        <span className="hp-label">Total</span>
                        <span className="hp-value">{hero.hitpoints.total}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useState } from "react";
import Tab from "./Tab";
import './TabContainer.css'

export default function TabContainer({ hero }) {
    const [activeAbility, setActiveAbility] = useState(hero.abilities[0].name)
    const [ability, setAbility] = useState(hero.abilities[0])

    function handleAbility(tab) {
        setActiveAbility(tab.name)
        setAbility(hero.abilities.find(ability => ability.name === tab.name))
    }

    return (
        <section id="abilities">
            <div className="tab-container">
                {hero.abilities.map((tab) => (
                    <Tab
                        key={tab.name}
                        tabs={tab}
                        activeTab={activeAbility}
                        setActiveTab={() => handleAbility(tab)}
                    />
                ))}
            </div>
            <div className="info-container">
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
        </section>
    )
}
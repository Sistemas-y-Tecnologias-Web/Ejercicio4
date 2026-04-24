import { Link } from "react-router-dom"
import { useState } from "react"
import './NavBar.css'

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('home')

    return (
        <nav>
            <div className="logo">
                <img src="./img/OvLogo.png" alt="" />
                <h2>Overwatch</h2>
            </div>
            <div className="navigation-actions">
                <Link
                    to="/"
                    className={`btn ${activeTab === 'home' ? 'active' : undefined}`}
                    onClick={() => setActiveTab('home')}>
                    Inicio
                </Link>
                <Link
                    to="/heroes"
                    className={`btn ${activeTab === 'heroes' ? 'active' : undefined}`}
                    onClick={() => setActiveTab('heroes')}>
                    Héroes
                </Link>
            </div>
        </nav>
    )
}
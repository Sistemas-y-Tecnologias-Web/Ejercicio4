import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import './NavBar.css'
import { useTheme } from "../context/ThemeContext"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const activeTab = location.pathname === '/heroes' ? 'heroes' : 'home'
    const { theme, toggleTheme } = useTheme()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav>
            <div className="logo">
                <img src="/img/OvLogo.png" alt="" />
                <h2>Overwatch</h2>
            </div>

            <button 
                className={`burger-menu ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`navigation-actions ${isMenuOpen ? 'open' : ''}`}>
                <Link
                    to="/"
                    className={`btn ${activeTab === 'home' ? 'active' : undefined}`}
                    onClick={closeMenu}>
                    Inicio
                </Link>
                <Link
                    to="/heroes"
                    className={`btn ${activeTab === 'heroes' ? 'active' : undefined}`}
                    onClick={closeMenu}>
                    Héroes
                </Link>
            </div>
            <div className="global-changes">
                <button
                    onClick={toggleTheme}
                    className="theme-btn"
                    aria-label="Change Theme"
                >
                    {theme === 'dark' ? '☀' : '🌙'}
                </button>
            </div>
        </nav>
    )
}
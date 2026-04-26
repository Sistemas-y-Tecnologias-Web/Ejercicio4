import { Link, useLocation } from "react-router-dom"
import './NavBar.css'
import { useTheme } from "../context/ThemeContext"

export default function NavBar() {
    const location = useLocation()
    const activeTab = location.pathname === '/heroes' ? 'heroes' : 'home'
    const { theme, toggleTheme } = useTheme()
    return (
        <nav>
            <div className="logo">
                <img src="/img/OvLogo.png" alt="" />
                <h2>Overwatch</h2>
            </div>
            <div className="navigation-actions">
                <Link
                    to="/"
                    className={`btn ${activeTab === 'home' ? 'active' : undefined}`}>
                    Inicio
                </Link>
                <Link
                    to="/heroes"
                    className={`btn ${activeTab === 'heroes' ? 'active' : undefined}`}>
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
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Hook to check the current URL path

    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Check if the current route is Jeopardy
    // If you are using HashRouter, location.pathname still returns "/jeopardy"
    const isJeopardyPage = location.pathname === "/jeopardy";

    // If it's the jeopardy page, render absolutely nothing for the navbar
    if (isJeopardyPage) {
        return null;
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" onClick={handleNavClick}>ANNABELLE BRIDGEWATERS</Link>
            </div>
            <p className={styles.menuButton} onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? "CLOSE" : "MENU"}
            </p>

            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
                <li>
                    <Link to="/" onClick={handleNavClick}>HOME</Link>
                </li>
                <li>
                    <Link to="/graphic-design" onClick={handleNavClick}>GRAPHIC DESIGN</Link>
                </li>
                <li>
                    <Link to="/website-design" onClick={handleNavClick}>WEBSITE DESIGN</Link>
                </li>
                <li>
                    <Link to="/ux-design" onClick={handleNavClick}>UX DESIGN</Link>
                </li>
                <li>
                    <Link to="/3d-modeling" onClick={handleNavClick}>3D MODELING</Link>
                </li>
                <li>
                    <Link to="/illustration" onClick={handleNavClick}>ILLUSTRATION</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
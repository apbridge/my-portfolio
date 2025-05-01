import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">ANNABELLE BRIDGEWATERS</Link>
            </div>
            <p className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? "CLOSE" : "MENU"}
            </p>

            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                </li>
                <li>
                    <Link to="/graphic-design" onClick={() => setIsOpen(false)}>GRAPHIC DESIGN</Link>
                </li>
                <li>
                    <Link to="/website-design" onClick={() => setIsOpen(false)}>WEBSITE DESIGN</Link>
                </li>
                <li>
                    <Link to="/ux-design" onClick={() => setIsOpen(false)}>UX DESIGN</Link>
                </li>
                <li>
                    <Link to="/3d-modeling" onClick={() => setIsOpen(false)}>3D MODELING</Link>
                </li>
                <li>
                    <Link to="/illustration" onClick={() => setIsOpen(false)}>ILLUSTRATION</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

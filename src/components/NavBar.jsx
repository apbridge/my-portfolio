import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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

import { useLocation } from "react-router-dom"; // Added useLocation
import styles from "../styles/footer.module.css";

const Footer = () => {
    const location = useLocation(); // Hook to check the current URL path

    // Check if the current route is Jeopardy
    const isJeopardyPage = location.pathname === "/jeopardy";

    // Hide the footer entirely on the Jeopardy page
    if (isJeopardyPage) {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>© 2025 Annabelle Bridgewaters. All rights reserved.</p>
                    <div className={styles.socials}>
                        <a className={styles.email} href="mailto:apbridge22@gmail.com">
                            apbridge22@gmail.com
                        </a>
                        <span> | </span>
                        <a
                            className={styles.linkedin}
                            href="https://www.linkedin.com/in/apbridge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div
                    className={styles.top}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <p>BACK TO TOP ^</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
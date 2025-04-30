import styles from "../styles/footer.module.css";

const Footer = () => {
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

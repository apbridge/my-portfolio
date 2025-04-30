import styles from '../styles/home.module.css';
import dino from '../assets/dino.png';
import babybelle from '../assets/babybelle.jpg';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className={styles.container1}>
                <div className={styles.headerContent}>
                    <h1>Hello!</h1>
                    <h2>I am Annabelle Bridgewaters!</h2>
                    <h3>Web & Graphic Designer</h3>
                </div>
                <hr />
                <div className={styles.aboutContent}>
                <h4 class={styles.aboutHeading}>About Me</h4>
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutImageWrapper}>
                            <img className={styles.aboutImage} src={babybelle} alt="Annabelle" />
                        </div>
                        <div className={styles.aboutText}>
                            <p>Hi! I'm Annabelle Bridgewaters, a Senior studying Web Programming & Design at Purdue University. I'm passionate about combining creativity and technology to build functional, aesthetically pleasing designs. In my free time, I enjoy photo editing and creating visuals from scratch using Adobe Photoshop, including posters, graphic arts, and digital illustrations.</p>
                            <p>I have a strong interest in graphic design, web design, and UX design, and I'm excited about opportunities to apply my skills in a practical setting. My goal is to work in a creative environment where I can contribute to impactful projects while continuing to grow as a designer.</p>
                            <p>When I'm not working on design projects, I love exploring new design trends and pushing the limits of what I can create!</p>
                            <p>Feel free to reach out anytime!</p>
                            <a className={styles.email} href="mailto:apbridge22@gmail.com">
                                apbridge22@gmail.com
                            </a>
                            <br/>
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
                </div>
                <hr />
                <h4 className={styles.h4}>Featured Projects</h4>
                <div className={styles.featuredProjects}>
                    <div className={styles.projectCard}>
                        <img className={styles.projectImage} src={dino} alt="Project 1" />
                        <div className={styles.cardContent}>
                            <h4>Custom Characters</h4>
                            <p>I created a series of original character designs using Adobe Photoshop, focusing on a consistent visual style.</p>
                            <Link to="/graphic-design" className={styles.projectButton}>View More Like This</Link>
                        </div>
                    </div>
                    <div className={styles.projectCard}>
                        <img className={styles.projectImage} src={dino} alt="Project 2" />
                        <div className={styles.cardContent}>
                            <h4>Website Designs</h4>
                            <p>This is a short description of another project...</p>
                            <Link to="/website-design" className={styles.projectButton}>View More Like This</Link>
                        </div>
                    </div>
                    <div className={styles.projectCard}>
                        <img className={styles.projectImage} src={dino} alt="Project 3" />
                        <div className={styles.cardContent}>
                            <h4>Poster Designs</h4>
                            <p>This is a short description of another project...</p>
                            <Link to="/graphic-design" className={styles.projectButton}>View More Like This</Link>                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

import styles from '../styles/home.module.css';
import babybelle from '../assets/home/babybelle.jpg';
import dino from '../assets/gd/dino.png';
import placeholder from '../assets/placeholder.png'
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: dino,
        projectName: 'Custom Character Designs',
        description: 'Unique and personalized character designs created for custom calendars at SDI Innovations. Created with Adobe Photoshop.',
        link: '/graphic-design',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Website Recreation Project',
        description: 'This project was created in React.js for the Website Recreation Project for CGT 390 at Purdue University.',
        link: '/website-design',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'What Else Can A Starship Do?',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/ux-design',
    },
]

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
                    {/* <h4 className={styles.aboutHeading}>About Me</h4> */}
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
                            <br />
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
                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <img src={project.photo} alt={project.projectName} className={styles.projectImage} />
                            <h5 className={styles.projectTitle}>{project.projectName}</h5>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <Link to={project.link} className={styles.projectButton} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                View
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;

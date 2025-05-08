import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: placeholder,
        projectName: 'Purple Cry',
        description: 'Digital Illustration for CGT 32101 at Purdue University.',
        link: '/purple-cry',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Landscape',
        description: 'Digital Illustration of a landscape for CGT 32101 at Purdue University.',
        link: '/landscape',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Space Brain',
        description: 'Digital Illustration of a man with random objects coming out of his head. This was a personal project.',
        link: '/space-brain',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Still Life',
        description: 'Digital Illustration of still life for CGT 32101 at Purdue University.',
        link: '/still-life',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Yoshi',
        description: 'Sketch of Yoshi for CGT 112 at Purdue University.',
        link: '/yoshi',
    },
    {
        id: 6,
        photo: placeholder,
        projectName: 'Various Plants',
        description: 'Various plant sketches for CGT 112 at Purdue University.',
        link: '/various-plants',
    },
]

const IllustrationPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Illustrations</h1>
                <hr />
                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImageWrapper}>
                                <img src={project.photo} alt={project.projectName} className={styles.projectImage} />
                            </div>
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

export default IllustrationPage;
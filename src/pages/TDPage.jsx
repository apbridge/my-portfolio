import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: placeholder,
        projectName: 'Potted Plant',
        description: 'placeholder',
        link: '/ux-design',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Modern House',
        description: 'placeholder',
        link: '/ux-design',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Snowman',
        description: 'placeholder',
        link: '/ux-design',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Kitchen Blockout',
        description: 'placeholder',
        link: '/ux-design',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Unit Blocks',
        description: 'placeholder',
        link: '/ux-design',
    },
]

const TDPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>3D Modeling</h1>
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

export default TDPage;
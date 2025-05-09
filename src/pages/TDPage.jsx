import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: placeholder,
        projectName: 'Potted Plant',
        description: '3D Model of a potted plant created for CGT 118 at Purdue University.',
        link: '/potted-plant',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Modern House',
        description: '3D Model of a modern house created for CGT 118 at Purdue University.',
        link: '/modern-house',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Snowman',
        description: '3D Model of a snowman created for CGT 118 at Purdue University.',
        link: '/snowman',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Kitchen Blockout',
        description: '3D blockout model of a kitchen created for CGT 118 at Purdue University.',
        link: '/kitchen-blockout',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Unit Blocks',
        description: '3D Model using unit blocks with wood texture for CGT 118 at Purdue University.',
        link: '/unit-blocks',
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
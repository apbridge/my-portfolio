import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: placeholder,
        projectName: 'My Portfolio (This Website)',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Richelle In A Handbasket - Digital Delights',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Website Recreation Project',
        description: 'Unique and personalized character designs created for custom calendars at SDI Innovations. Created with Adobe Photoshop.',
        link: '/website-design',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Profile App Project',
        description: 'This project was created in React.js for the Website Recreation Project for CGT 390 at Purdue University.',
        link: '/website-design',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Data Management System',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 6,
        photo: placeholder,
        projectName: 'Forms Projects',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 7,
        photo: placeholder,
        projectName: 'Zoom Images',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 8,
        photo: placeholder,
        projectName: 'Alien Mini Game',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 9,
        photo: placeholder,
        projectName: 'Hover Project',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 10,
        photo: placeholder,
        projectName: 'Sliding Images Project',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },
    {
        id: 11,
        photo: placeholder,
        projectName: 'Student Connect Project',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/website-design',
    },

]

const WebsiteDesignPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Website Design</h1>
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

export default WebsiteDesignPage;
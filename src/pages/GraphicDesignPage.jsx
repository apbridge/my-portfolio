import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import dino from '../assets/gd/dino.png';
import purple from '../assets/gd/purplesmall.jpg';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: dino,
        projectName: 'Custom Character Designs',
        description: ' Unique and personalized calendar designs created for school datebooks at SDI Innovations. Created with Adobe InDesign and Adobe Photoshop.',
        link: '/character-design',
    },
    {
        id: 2,
        photo: purple,
        projectName: 'Custom Calendar Designs',
        description: 'This project was created in React.js for the Website Recreation Project for CGT 390 at Purdue University.',
        link: '/calendar-design',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Logo Designs',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Marketing and Promotional Designs',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Poster Designs',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 6,
        photo: placeholder,
        projectName: 'Sxster Bingo',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 7,
        photo: placeholder,
        projectName: 'LineWork + Color',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 8,
        photo: placeholder,
        projectName: 'Infographic',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 9,
        photo: placeholder,
        projectName: 'East Central High School Agenda Cover, Graduation Ticket, and Graduation Program Designs',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
    {
        id: 10,
        photo: placeholder,
        projectName: 'Photo Collage',
        description: 'In the project, my team discovered other things that a Starship Robot could be used for on the Purdue University campus (besides food delivery).',
        link: '/graphic-design',
    },
]

const GraphicDesignPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Graphic Design</h1>
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

export default GraphicDesignPage;
import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import dino from '../assets/gd/dino.png';
import purple from '../assets/gd/purple-small.jpg';
import banana from "../assets/gd/banana.jpg";
import { Link } from "react-router-dom";
import reveal from "../assets/gd/reveal.jpg";

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
        description: 'Unique and personalized calendar designs created for school datebooks at SDI Innovations. Created with Adobe InDesign and Adobe Photoshop.',
        link: '/calendar-design',
    },
    {
        id: 3,
        photo: reveal,
        projectName: 'Marketing and Promotional Designs',
        description: 'Various marketing and promotional designs created using Adobe Photoshop or Canva.com. All designs were created for Delta Kappa Delta Sorority Inc., Windsor Residence Hall Club, ... ',
        link: '/marketing',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Poster Designs',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Sxster Bingo',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 6,
        photo: placeholder,
        projectName: 'LineWork + Color',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 7,
        photo: placeholder,
        projectName: 'Infographic',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 8,
        photo: placeholder,
        projectName: 'East Central High School Agenda Cover, Graduation Ticket, and Graduation Program Designs',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 9,
        photo: placeholder,
        projectName: 'Photo Collage',
        description: 'placeholder',
        link: '/graphic-design',
    },
    {
        id: 10,
        photo: banana,
        projectName: 'Typography and Logo Designs',
        description: 'Various typography and logo designs created in Adobe Photoshop or Photopea.com.',
        link: '/type-design',
    },
]

const GraphicDesignPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Graphic Design</h1>
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

export default GraphicDesignPage;
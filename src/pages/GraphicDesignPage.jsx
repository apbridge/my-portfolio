import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import dino from '../assets/gd/dino.png';
import purple from '../assets/gd/purple-small.jpg';
import banana from "../assets/gd/banana.jpg";
import poster from "../assets/gd/movie.jpg";
import bingo from "../assets/gd/bingo.jpg";
import linework from "../assets/gd/linework.png";
import spotify from "../assets/gd/spotify.jpg";
import agenda from "../assets/gd/agenda.jpg";
import collage from "../assets/gd/collage.jpg";
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
        photo: poster,
        projectName: 'Poster Designs',
        description: 'Various poster designs created in Adobe Photoshop.',
        link: '/posters',
    },
    {
        id: 5,
        photo: bingo,
        projectName: 'Sxster Bingo',
        description: 'Sxster Bingo created in Adobe Photoshop in Spring 2024.',
        link: '/bingo',
    },
    {
        id: 6,
        photo: linework,
        projectName: 'LineWork + Color',
        description: 'Linework done in Adobe Illustrator. Coloring done in Adobe Photoshop.',
        link: '/linework',
    },
    {
        id: 7,
        photo: spotify,
        projectName: 'Infographic',
        description: 'Infographic created in Canva.com. Information from Spotify.com as of Spring 2023.',
        link: '/infographic',
    },
    {
        id: 8,
        photo: agenda,
        projectName: 'East Central High School Agenda Cover and Graduation Program Designs',
        description: 'Both the agenda cover and the graduation program were created in Adobe Photoshop.',
        link: '/hs',
    },
    {
        id: 9,
        photo: collage,
        projectName: 'Photo Collage',
        description: 'Photo Collage created in Adobe Photoshop. None of the images used are mine. This collage won first place for digital design in the ECHS Spring 2021 Art Show.',
        link: '/collage',
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
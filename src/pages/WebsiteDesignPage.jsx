import styles from '../styles/gd.module.css';
import placeholder from '../assets/placeholder.png';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        photo: placeholder,
        projectName: 'My Portfolio (This Website)',
        description: 'This website was coded in JavaScript using the React.js library. It was created to display all of my work.',
        link: '/portfolio',
    },
    {
        id: 2,
        photo: placeholder,
        projectName: 'Richelle In A Handbasket - Digital Delights',
        description: 'As a team member of Digital Delights, I helped to remake the Richelle in a Handbasket website to improve it for the owner. This was done in Squarespace.',
        link: '/richelle-in-a-handbasket',
    },
    {
        id: 3,
        photo: placeholder,
        projectName: 'Website Recreation Project',
        description: 'For this project, I recreated the DeEtta`s Bakery website in React.js. The goal was to make it as similar as possible with the skillset I had at the time.',
        link: '/website-recreation',
    },
    {
        id: 4,
        photo: placeholder,
        projectName: 'Profile App Project',
        description: 'The Profile App Project was done in React.js in the CGT 390 class at Purdue University.',
        link: '/profile-app',
    },
    {
        id: 5,
        photo: placeholder,
        projectName: 'Mini Games',
        description: 'Various mini games created to engage users on both websites and windows desktop apps.',
        link: '/mini-games',
    },
    {
        id: 6,
        photo: placeholder,
        projectName: 'Data Management System',
        description: 'Various Select, Insert, Update, & Delete Management Systems created for CGT 356 at Purdue University.',
        link: '/dms',
    },
    {
        id: 7,
        photo: placeholder,
        projectName: 'Color Converter',
        description: 'This project allows users to change the colors by changing the values for each HEX value.',
        link: '/color-converter',
    },
    {
        id: 8,
        photo: placeholder,
        projectName: 'Forms Projects',
        description: 'Various form projects using both backend integration and frontend development.',
        link: '/forms',
    },
    {
        id: 9,
        photo: placeholder,
        projectName: 'Single Digit Calculator',
        description: 'Simple single digit calculator created used ASP.NET & C#.',
        link: '/calculator',
    },
    {
        id: 10,
        photo: placeholder,
        projectName: 'Zoom Images',
        description: 'This projects allows user to select an image and zoom into it by hovering over a part of it.',
        link: '/zoom-images',
    },
    {
        id: 11,
        photo: placeholder,
        projectName: 'Data Connections',
        description: 'Another database management system but this one is coded in ASP.NET & C#.',
        link: '/data-connections',
    },
    {
        id: 12,
        photo: placeholder,
        projectName: 'Hover Project',
        description: 'This project was created for CGT 353 and allows users to hover and click on images.',
        link: '/hover-images',
    },
    {
        id: 13,
        photo: placeholder,
        projectName: 'Sliding Images Project',
        description: 'This project is a simple carousel of images that users can click through. ',
        link: '/sliding-images',
    },
    {
        id: 14,
        photo: placeholder,
        projectName: 'IDE Usage & Team Comparison Table',
        description: 'Created for CGT 456, users can enter information and it displays back to them. The table aspect just shows a coded table of team comparisons.',
        link: '/ide',
    },
    {
        id: 15,
        photo: placeholder,
        projectName: 'Student Connect Project',
        description: 'Group project done for CGT 141 meant to be an improved version of Boiler Connect.',
        link: '/student-connect',
    },

]

const WebsiteDesignPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Website Design</h1>
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

export default WebsiteDesignPage;
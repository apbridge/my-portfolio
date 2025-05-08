import styles from "../../styles/marketing.module.css";
import movie from "../../assets/gd/movie.jpg";
import mando from "../../assets/gd/mando.jpg";
import eras from "../../assets/gd/eras.jpg";
import wallpaper from "../../assets/gd/wallpaper.jpg";

const posters = [
    {
        id: 1,
        photo: movie,
        projectName: 'Outer Banks Poster',
        description: 'Created Spring 2023 for CGT 118 at Purdue University',
    },
    {
        id: 2,
        photo: eras,
        projectName: 'Personalized Eras Tour Poster',
        description: 'Created December 2023 as a personal project',
    },
    {
        id: 3,
        photo: mando,
        projectName: 'Mandalorian Poster',
        description: 'Created Spring 2022 as a personal project',
    },
    {
        id: 4,
        photo: wallpaper,
        projectName: 'Galaxy Spill Poster',
        description: 'Created Spring 2023 as a personal project',
    },
];



const PosterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Poster Designs</h2>
                <p className={styles.p}>
                    Various poster designs created in Adobe Photoshop.
                </p>
                <p className={styles.created}>None of the images used below belong to me.</p>
            </div>
            <hr />
            <div className={styles.grid}>
                {posters.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.title}>{project.projectName}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.imageWrapper}>
                            <img src={project.photo} alt={project.projectName} className={styles.photo1} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PosterPage;
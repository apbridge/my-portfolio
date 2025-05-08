import styles from "../../styles/marketing.module.css";
import collage from "../../assets/gd/collage.jpg";

const PhotoCollagePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Photo Collage</h2>
                <p className={styles.p}>
                    Photo Collage created in Adobe Photoshop. None of the images used are mine. This collage won first place for digital design in the ECHS Spring 2021 Art Show.
                </p>
                <p className={styles.created}>Created Spring 2021 for East Central High School.</p>
            </div>
            <hr />
            <div className={styles.imageWrapper}>
                <img src={collage} className={styles.photo} />
            </div>
        </div>
    );
};

export default PhotoCollagePage;
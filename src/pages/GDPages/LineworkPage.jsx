import styles from "../../styles/marketing.module.css";
import linework from "../../assets/gd/linework.png";

const LineworkPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Linework + Color</h2>
                <p className={styles.p}>
                    Linework done in Adobe Illustrator. Coloring done in Adobe Photoshop.
                </p>
                <p className={styles.created}>Created Spring 2023 for CGT 118 at Purdue University.</p>
            </div>
            <hr />
            <div className={styles.imageWrapper}>
                <img src={linework} className={styles.photo} />
            </div>
        </div>
    );
};

export default LineworkPage;
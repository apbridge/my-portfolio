import styles from "../../styles/marketing.module.css";
import bingo from "../../assets/gd/bingo.jpg";

const BingoPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Sxster Bingo Design</h2>
                <p className={styles.p}>
                    Sxster Bingo created in Adobe Photoshop in Spring 2024 for Delta Kappa Delta Sorority Inc. at Purdue University.
                </p>
                <p className={styles.created}>None of the images used below belong to me.</p>
            </div>
            <hr />
            <div className={styles.imageWrapper}>
                <img src={bingo} className={styles.photo} />
            </div>
        </div>
    );
};

export default BingoPage;
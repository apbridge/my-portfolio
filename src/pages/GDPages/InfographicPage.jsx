import styles from "../../styles/marketing.module.css";
import spotify from "../../assets/gd/spotify.jpg";

const InfographicPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Infographic</h2>
                <p className={styles.p}>
                    Infographic created in Canva.com. Information from Spotify.com as of Spring 2023. 
                </p>
                <p className={styles.created}>Created Spring 2023 for CGT 118 at Purdue University.</p>
            </div>
            <hr />
            <div className={styles.imageWrapper}>
                <img src={spotify} className={styles.photo} />
            </div>
        </div>
    );
};

export default InfographicPage;
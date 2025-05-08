import styles from "../../styles/marketing.module.css";
import agenda from "../../assets/gd/agenda.jpg";
import program1 from "../../assets/gd/program1.jpg";
import program2 from "../../assets/gd/program2.jpg";

const program = [
    program1, program2
];

const HighSchoolPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>East Central High School Agenda Cover and Graduation Program Designs</h2>
                <p className={styles.p}>
                    Both the agenda cover and the graduation program were created in Adobe Photoshop.
                </p>
                <p className={styles.created}>Created Spring 2021 for East Central High School.</p>
            </div>
            <hr />
            <h3 className={styles.h3}>Agenda Cover</h3>
            <div className={styles.imageWrapper}>
                <img src={agenda} className={styles.photo} />
            </div>
            <hr />
            <h3 className={styles.h3}>Graduation Program</h3>
            <div className={styles.imageWrapper1}>
                <img src={program1} className={styles.photo2} />
                <img src={program2} className={styles.photo2} />
            </div>
        </div>
    );
};

export default HighSchoolPage;
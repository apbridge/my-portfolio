import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/marketing.module.css";
import reveal from "../../assets/gd/reveal.jpg";
import mehendi from "../../assets/gd/mehendi.jpg";
import mango from "../../assets/gd/mango.jpg";
import exec1 from "../../assets/gd/exec1.jpg";
import exec2 from "../../assets/gd/exec2.jpg";
import exec3 from "../../assets/gd/exec3.jpg";
import exec4 from "../../assets/gd/exec4.jpg";
import exec5 from "../../assets/gd/exec5.jpg";
import gen1 from "../../assets/gd/gen1.jpg";
import gen2 from "../../assets/gd/gen2.jpg";
import gen3 from "../../assets/gd/gen3.jpg";
import gen4 from "../../assets/gd/gen4.jpg";
import gen5 from "../../assets/gd/gen5.jpg";
import gen6 from "../../assets/gd/gen6.jpg";
import gen7 from "../../assets/gd/gen7.jpg";
import gen8 from "../../assets/gd/gen8.jpg";
import gen9 from "../../assets/gd/gen9.jpg";
import gen10 from "../../assets/gd/gen10.jpg";
import pandax from "../../assets/gd/pandax.jpg";
import tsc from "../../assets/gd/tsc.jpg";
import ra1 from "../../assets/gd/ra1.jpg";
import ra2 from "../../assets/gd/ra2.jpg";
import ra3 from "../../assets/gd/ra3.jpg";
import recruit1 from "../../assets/gd/recruit1.jpg";
import recruit2 from "../../assets/gd/recruit2.jpg";
import recruit3 from "../../assets/gd/recruit3.jpg";
import recruit4 from "../../assets/gd/recruit4.jpg";
import recruit5 from "../../assets/gd/recruit5.jpg";
import senior1 from "../../assets/gd/senior1.jpg";
import senior2 from "../../assets/gd/senior2.jpg";
import senior3 from "../../assets/gd/senior3.jpg";
import senior4 from "../../assets/gd/senior4.jpg";
import senior5 from "../../assets/gd/senior5.jpg";
import senior6 from "../../assets/gd/senior6.jpg";
import rainbow from "../../assets/gd/rainbow.jpg";
import halloween from "../../assets/gd/halloween.jpg";
import welcome from "../../assets/gd/welcome.jpg";
import bbq from "../../assets/gd/bbq.jpg";
import wanted from "../../assets/gd/wanted.jpg";
import formal1 from "../../assets/gd/formal1.jpg";
import formal2 from "../../assets/gd/formal2.jpg";


const projects = [
    {
        id: 1,
        photo: reveal,
        projectName: 'Reveal Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
    {
        id: 2,
        photo: mehendi,
        projectName: 'Mehendi Fundraiser Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
    {
        id: 3,
        photo: mango,
        projectName: 'Mango Mango Fundraiser Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
    {
        id: 4,
        photo: pandax,
        projectName: 'Panda Express Fundraiser Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
    {
        id: 5,
        photo: tsc,
        projectName: 'Tsaocaa Fundraiser Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
    {
        id: 6,
        photo: rainbow,
        projectName: 'Rainbow Dash to DKD Sample Recruitment Post',
        description: 'Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University',
    },
];
const exec = [
    exec1, exec2, exec3, exec4, exec5
];
const gen = [
    gen1, gen2, gen3, gen4, gen5, gen6, gen7, gen8, gen9, gen10
];
const ra = [
    ra1, ra2, ra3
];
const recruit = [
    recruit1, recruit2, recruit3, recruit4, recruit5
];
const senior = [
    senior1, senior2, senior3, senior4, senior5, senior6
];

const wrhc = [
    {
        id: 1,
        photo: halloween,
        projectName: 'Halloween Event Flyer',
        description: 'Created Fall 2024 for Windsor Residence Hall Club at Purdue University',
    },
    {
        id: 2,
        photo: welcome,
        projectName: 'Welcome Back Event Flyer',
        description: 'Created Fall 2024 for Windsor Residence Hall Club at Purdue University',
    },
];
const shreve = [
    {
        id: 1,
        photo: wanted,
        projectName: 'Floor Senators Wanted Flyer',
        description: 'Created Fall 2022 for Shreve Residence Hall Club at Purdue University',
    },
    {
        id: 2,
        photo: bbq,
        projectName: 'Shreve BBQ Event Flyer',
        description: 'Created Fall 2024 for Shreve Residence Hall Club at Purdue University',
    },
    {
        id: 3,
        photo: formal1,
        projectName: 'Shreve Formal Flyer',
        description: 'Created Fall 2024 for Shreve Residence Hall Club at Purdue University',
    },
    {
        id: 4,
        photo: formal2,
        projectName: 'Shreve Formal Poster',
        description: 'Created Fall 2022 for Shreve Residence Hall Club at Purdue University',
    },
];
// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
    <button className={styles.customArrow + " " + styles.prevArrow} onClick={onClick}>
        🡸
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button className={styles.customArrow + " " + styles.nextArrow} onClick={onClick}>
        🡺
    </button>
);

const MarketingPage = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Marketing and Promotional Designs</h2>
                <p className={styles.p}>
                    Various marketing and promotional designs created using Adobe Photoshop or Canva.com. All designs were created for
                    Delta Kappa Delta Sorority Inc., Windsor Residence Hall Club, or Shreve Residence Hall Club at Purdue Unviersity.
                </p>
                <p className={styles.created}>None of the images used below belong to me.</p>
            </div>
            <hr />
            <h3 className={styles.h3}>Delta Kappa Delta | @dkdpurdue on Instagram</h3>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.title}>{project.projectName}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.imageWrapper}>
                            <img src={project.photo} alt={project.projectName} className={styles.photo} />
                        </div>
                    </div>
                ))}
            </div>
            <h2 className={styles.title}>Executive Board Post</h2>
            <p className={styles.description}>Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University</p>
            <div className={styles.carousel}>
                <Slider {...settings}>
                    {exec.map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={img} alt={`exec-${index}`} className={styles.image} />
                        </div>
                    ))}
                </Slider>
            </div>
            <h2 className={styles.title}>General Board Post</h2>
            <p className={styles.description}>Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University</p>
            <div className={styles.carousel}>
                <Slider {...settings}>
                    {gen.map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={img} alt={`gen-${index}`} className={styles.image} />
                        </div>
                    ))}
                </Slider>
            </div>
            <h2 className={styles.title}>Recruitment Advisor Post</h2>
            <p className={styles.description}>Created Fall 2024 for Delta Kappa Delta Sorority Inc. at Purdue University</p>
            <div className={styles.carousel}>
                <Slider {...settings}>
                    {ra.map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={img} alt={`ra-${index}`} className={styles.image} />
                        </div>
                    ))}
                </Slider>
            </div>
            <h2 className={styles.title}>Senior Graduation Posts</h2>
            <p className={styles.description}>Created Summer 2024 for Delta Kappa Delta Sorority Inc. at Purdue University</p>
            <div className={styles.carousel}>
                <Slider {...settings}>
                    {senior.map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={img} alt={`senior-${index}`} className={styles.image} />
                        </div>
                    ))}
                </Slider>
            </div>
            <hr />
            <h3 className={styles.h3}>Windsor Residence Hall Club</h3>
            <div className={styles.grid}>
                {wrhc.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.title}>{project.projectName}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.imageWrapper}>
                            <img src={project.photo} alt={project.projectName} className={styles.photo} />
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <h3 className={styles.h3}>Shreve Residence Hall Club</h3>
            <div className={styles.grid}>
                {shreve.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.title}>{project.projectName}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.imageWrapper}>
                            <img src={project.photo} alt={project.projectName} className={styles.photo} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketingPage;
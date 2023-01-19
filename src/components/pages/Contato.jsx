import styles from './Contato.module.css';
import LeftMenu from '../layout/LeftMenu';
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io"
import {SiGmail, SiInstagram} from "react-icons/si"

function Home()  {
    return (

        <div className={styles.home_side}>
        <LeftMenu/>
        <section className={styles.home}>
                <h3>Fale comigo</h3>    
            <div className={styles.bloco}>
                <a  href="" className={styles.linkedin}><IoLogoLinkedin/>Wesley.Bartolomeu</a>
            </div>
            <div className={styles.bloco}>
                <a  href=""  className={styles.github}><IoLogoGithub/>WesleyBartolomeu</a>
            </div>
            <div className={styles.bloco}>
                <a href="" className={styles.twitter}><IoLogoTwitter/>Wesley_bsantos</a>
            </div>
            <div className={styles.bloco}>
                <a href="" className={styles.gmail}><SiGmail/>Wesley-Bsantos</a>
            </div>  
            <div className={styles.bloco}>
                <a href="" className={styles.instagram}><SiInstagram/>Wesley-Bsantos</a>
            </div>                       
        </section>

    </div>
    );
}

export default Home;

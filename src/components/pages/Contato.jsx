import styles from './Contato.module.css';
import LeftMenu from '../layout/LeftMenu';
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io"
import {SiGmail, SiInstagram} from "react-icons/si"

function Contato()  {
    return (

        <div className={styles.contact_side}>
        <LeftMenu/>
        <section className={styles.home}>
            <div className={styles.bloco}>
                <a  href="https://github.com/WesleyBartolomeu" className={styles.linkedin}><IoLogoLinkedin/>Wesley.Bartolomeu</a>
                <a  href="https://github.com/WesleyBartolomeu"  className={styles.github}><IoLogoGithub/>WesleyBartolomeu</a>
                <a  href="https://github.com/WesleyBartolomeu" className={styles.instagram}><SiInstagram/>Wesley-Bsantos</a>

            <div className={styles.bloco}>
                <a href="https://github.com/WesleyBartolomeu" className={styles.twitter}><IoLogoTwitter/>^Wesley_bsantos</a>
                <a href="https://github.com/WesleyBartolomeu" className={styles.gmail}><SiGmail/>Wesley-Bsantos</a>
                <a href="https://github.com/WesleyBartolomeu" className={styles.instagram}><SiInstagram/>Wesley-Bsantos</a>
            </div>                  
        </section>

    </div>
    );
}

export default Contato;

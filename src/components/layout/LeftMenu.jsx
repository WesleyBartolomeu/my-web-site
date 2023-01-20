import styles from './LeftMenu.module.css'
import weshome from '../images/foto_wes_home.jpeg'
import { DiSass, DiHtml5, DiReact, DiGit} from "react-icons/di";
import { IoLogoJavascript,IoLogoWordpress } from "react-icons/io";
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io"
import {SiGmail, SiInstagram} from "react-icons/si"


function LeftMenu()  {
    return (
            <section className={styles.side_menu}>
                <img src={weshome} alt="" />
                <h1>Olá, Me chamo Wesley Bartolomeu <br/> e sou desenvolvedor Front-end. </h1>
                <h2> Estudante de Analise e Desenvolvimento de Sistemas  <br />| Desenvolvedor Front-end | Estudando React | Buscando Job |</h2>
                <div className={styles.side_menu_tec}>
                    <h3>Tecnologias que tenho familiaridade</h3>
                    <div className={styles.icons}>
                    <p className={styles.sass}><DiSass/></p>
                    <p className={styles.html}><DiHtml5/></p>
                    <p className={styles.js}><IoLogoJavascript/></p>
                    <p className={styles.react}><DiReact/></p>
                    <p className={styles.git}><DiGit/></p>
                    <p className={styles.wordpress}><IoLogoWordpress/></p>
                    </div>
                </div>
                <div className={styles.contato}>
               <h2>Fale comigo por esses Canais</h2>
            <a href="https://github.com/WesleyBartolomeu" className={styles.linkedin}><IoLogoLinkedin/><span>Wesley.Bartolomeu</span> </a>
            <a href="https://github.com/WesleyBartolomeu"  className={styles.github}><IoLogoGithub/> <span>WesleyBartolomeu</span> </a>
            <a href="https://github.com/WesleyBartolomeu" className={styles.instagram}><SiInstagram/> <span>Wesley-Bsantos</span> </a>
            <a href="https://github.com/WesleyBartolomeu" className={styles.gmail}><SiGmail/><span>Wesley-Bsantos</span></a>
            </div>
            </section>
    );
}

export default LeftMenu;

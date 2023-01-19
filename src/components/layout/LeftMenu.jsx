import styles from './LeftMenu.module.css'
import weshome from '../images/foto_wes_home.jpeg'
import { DiSass, DiHtml5, DiReact, DiGit} from "react-icons/di";
import { IoLogoJavascript,IoLogoWordpress } from "react-icons/io";


function LeftMenu()  {
    return (

    <div className={styles.gambiarra}> 
            <section className={styles.side_menu}>
                <img src={weshome} alt="" />
                <h1>Olá, Me chamo Wesley Bartolomeu <br/> e sou desenvolvedor Front-end. </h1>
                <h2>| Estudante de Analise e Desenvolvimento de Sistemas | <br />| Desenvolvedor | Estudando React | Buscando Job |</h2>
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
            </section>
    </div>

    );
}

export default LeftMenu;

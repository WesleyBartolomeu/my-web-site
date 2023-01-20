import LeftMenu from "../layout/LeftMenu"
import styles from "../pages/Projetos.module.css"
import sunnyside from "../images/sunnyside-redi.png"
import countdown from "../images/Countdown-redi.png"
import dechra from "../images/Decrha-redi.png"
import controlapp from "../images/ControlApp-redi.png"

function Home() {
    return (
    <section className={styles.projetos_page_menu}>
        <LeftMenu/>
        <div className={styles.flex}>
                <h2>Alguns dos Meus Projetos</h2>
            <div className={styles.sites}> 
             <a href="https://github.com/WesleyBartolomeu/Desafio-01-Agency-Sunnyside" 
                rel="noopener noreferrer" target="_blank"><img src={sunnyside} alt=""/></a>  
             <a href="https://github.com/WesleyBartolomeu/Dechra-Clone-Aprendizado" 
                rel="noopener noreferrer" target="_blank"><img src={dechra} alt="" /></a>
               </div>   
            <div className={styles.sites}> 
             <a href="https://github.com/WesleyBartolomeu/Desafio-launch-countdown-timer"  
                rel="noopener noreferrer" target="_blank"><img src={countdown} alt="" /></a>
             <a href="https://github.com/WesleyBartolomeu/AndroidStudios_ControlApp" 
                rel="noopener noreferrer" target="_blank"><img src={controlapp} alt="" /></a>
               </div>       
         </div>
    </section>
    
    )
}
export default Home
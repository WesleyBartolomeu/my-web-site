import LeftMenu from "../layout/LeftMenu"
import styles from "../pages/Home.module.css"
import sunnyside from "../images/Sunny1.png"
import countdown from "../images/Countdown.png"
import dechra from "../images/Derch.png"
import quebrando from "../images/quebrandobarreiras-v2.png"

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
             <a href="https://quebrandobarreiras.rexona.com.br/pt-BR/" 
                rel="noopener noreferrer" target="_blank"><img src={quebrando} alt="" /></a>
               </div>       
         </div>
    </section>
    
    )
}
export default Home
import React from "react"
import styles from './Footer.module.css'
import { CiTwitter, CiLinkedin,CiPizza} from "react-icons/ci";
import { BiCopyright} from "react-icons/bi";

function Footer() {

    return (
    
    <div className={styles.footer}>
        <div className={styles.copyright}>
            <p><BiCopyright/>Wesley Bartolomeu dos Santos</p>
        </div>
        <div className={styles.social}>
            <a  href="https://twitter.com/home?lang=pt"><CiTwitter/></a>
            <a  href="https://www.linkedin.com/in/wesley-bartolomeu-santos/"><CiLinkedin/></a>
            <a  href="https://github.com/WesleyBartolomeu"><CiPizza/></a>
            <p></p>           
        </div>
    </div>
    )
}
export default Footer
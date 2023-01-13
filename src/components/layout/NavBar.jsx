import styles from './NavBar.module.css'
import React from "react"
import { Link } from 'react-router-dom'
import mainLogo from "../images/favicon.jpg"


function NavBar() {

    return(
            <div className={styles.navbar}>
                    <nav>
                    <img src={mainLogo} alt="" />
                        <ul>            
                            <li><Link to={"/Home"}></Link>Home</li>
                            <li><Link to={"/projetos"}>Projetos</Link></li>
                            <li><Link to={"/contato"}>Contato</Link></li>
                        </ul>
                    </nav>
            </div>
    )
}   

export default NavBar
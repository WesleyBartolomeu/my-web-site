import styles from './NavBar.module.css'
import React from "react"
import { Link } from 'react-router-dom'
import mainLogo from "../images/Logo_wbs_big.png"
import mainLogoW from "../images/logo_w_small.png"
import weshome from '../images/foto_wes_home.jpeg'
import { DiSass, DiHtml5, DiReact, DiGit} from "react-icons/di";
import { IoLogoJavascript,IoLogoWordpress } from "react-icons/io";
import Home from '../pages/Home'




function NavBar() {

    return(
            <>
            <nav className={styles.navbar}>
                    <Link to="/"><img src={mainLogoW} alt="" /></Link>
                        <ul>            
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/projetos"}>Projetos</Link></li>
                            <li><Link to={"/contato"}>Contato</Link></li>
                        </ul>
            </nav>


        
           
            </>
            
    )
}   

export default NavBar
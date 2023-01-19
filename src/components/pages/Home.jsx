import styles from './Home.module.css';
import LeftMenu from '../layout/LeftMenu';


function Home()  {
    return (

        <div className={styles.home_side}>
        <LeftMenu/>

    </div>
    );
}

export default Home;

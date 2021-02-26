import styles from '../styles/pages/Home.module.css';
import { SideBar } from './components/SideBar';

export default function Home() {
  return (  
    <div className={styles.wrapper}>
      <SideBar />

      <div className={styles.homeContainer}>
        <header>
          <h1>XP</h1>
        </header>
        <section>

        </section>
      </div>
    </div>
  )
}

import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from './components/CompletedChallenges';
import { Profile } from './components/Profile';
import { SideBar } from './components/SideBar';

export default function Home() {
  return (  
    <div className={styles.wrapper}>
      <SideBar />
      
      <div className={styles.homeContainer}>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
          </div>
          <div></div>
        </section>
      </div>
    </div>
  )
}

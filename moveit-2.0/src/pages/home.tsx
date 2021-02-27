import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from './components/ChallengeBox';
import { CompletedChallenges } from './components/CompletedChallenges';
import { CountDown } from './components/CountDown';
import { Profile } from './components/Profile';
import { SideBar } from './components/SideBar';

export default function Home() {
  return (  
    <div className={styles.wrapper}>

      <Head>
        <title>Home | Move.it</title>
      </Head>

      <SideBar />
      
      <div className={styles.homeContainer}>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </div>
  )
}

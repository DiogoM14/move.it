import Head from 'next/head';
import styles from '../styles/pages/Rank.module.css';
import { SideBar } from './components/SideBar';

export default function Rank() {
  return (
  <div className={styles.wrapper}>

    <Head>
      <title>Home | Move.it</title>
    </Head>

    <SideBar />

    <div className={styles.homeContainer}>
      <section>
        <div>

        </div>
        <div>

        </div>
      </section>
    </div>
  </div>
  )
}
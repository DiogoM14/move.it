import Head from 'next/head';
import styles from '../styles/pages/Landing.module.css';

import { Login } from './components/Login';

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Landing | Move.it</title>
      </Head>

      <section>
        <img src="/icons/landing-bg.svg" />

        <div>
          <Login />
        </div>
      </section>

    </div>
  )
}
import Head from 'next/head';
import styles from '../styles/pages/Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Landing | Move.it</title>
      </Head>

      <section>
        <div>
          <img src="/icons/landing-bg.svg" alt=""/>
        </div>
        <div>
          <img src="/icons/landing-logo.svg" alt=""/>

          <h1>Bem-vindo</h1>

          <div>
            <img src="/icons/github.svg" alt=""/>
            <p>Faça login com o seu Github para começar</p> 
          </div>

          <div className={styles.inputContainer}>
            <input type="text" placeholder="Digite o seu username"/>
            <span>
              <img src="/icons/landing-arrow.svg" alt=""/>
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}
import styles from '../../styles/components/Login.module.css';
import Link from 'next/link';

export function Login() {
  return (


    <div className={styles.loginContainer}>
      <img src="/icons/landing-logo.svg" alt=""/>

      <h1>Bem-vindo</h1>

      <div>
        <img src="/icons/github.svg" alt=""/>
        <p>Faça login com o seu Github para começar.</p> 
      </div>

      <div>
        <input type="text" placeholder="Digite o seu username"/>
        <Link href='/home'>
          <span>
            <img src="/icons/landing-arrow.svg" alt=""/>
          </span>
        </Link>
      </div>
    </div>
  )
}
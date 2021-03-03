import Head from 'next/head';
import styles from '../styles/pages/Rank.module.css';
import { SideBar } from './components/SideBar';

export default function Rank() {
  return (
  <div className={styles.wrapper}>

    <Head>
      <title>Ranking | Move.it</title>
    </Head>

    <SideBar />

    <div className={styles.rankContainer}>
      <h1>Leaderboard</h1>

      <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Desafios</th>
                <th>Experiência</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="https://github.com/diogom14.png"
                    alt="Diogo Martins"
                  />
                  <div>
                    <strong>Diogo Martins</strong>
                    <span>
                      <img src="/icons/level.svg" alt="Level" /> 
                      Level 19
                    </span>
                  </div>
                </td>
                <td>
                  <strong>127</strong> completados
                </td>
                <td>
                  <strong>108.000</strong> xp
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  </div>
  )
}
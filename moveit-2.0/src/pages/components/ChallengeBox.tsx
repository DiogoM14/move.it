import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <strong>Inicie um ciclo para receber desafios</strong>

      <p>
        <img src="/icons/level-up.svg" />
        Avance de level completando os desafios.
      </p>
    </div>
  )
}
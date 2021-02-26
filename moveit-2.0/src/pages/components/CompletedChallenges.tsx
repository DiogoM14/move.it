import styles from '../../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <strong>Desafios Completados</strong>
      <strong>12</strong>
    </div>
  )
}
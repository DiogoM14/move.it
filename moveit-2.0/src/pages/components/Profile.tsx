import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diogom14.png" alt="Diogo Martins"/>
      <div>
        <strong>Diogo Martins</strong>
        <p>
          <img src="/icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>
    </div>
  )
}
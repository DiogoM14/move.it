import styles from '../../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBarContainer}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '25%' }} />

        <span className={styles.currentExperience}  style={{ left: '25%'  }}>25 xp</span>
      </div>
      <span>100 xp</span>
    </header>
  )
}
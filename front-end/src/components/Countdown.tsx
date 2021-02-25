import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setIsFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => {
    setIsActive(true);
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time -1)
      }, 1000)
    } else if (isActive && time === 0) {
      setIsFinished(true);
      setIsActive(false);
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished  ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
         Ciclo encerrado
         <img src="/icons/check_circle.svg" alt="Ciclo encerrado"/>
        </button>
      ) : (
        <>
        {isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountDown}
          >
            Abandonar ciclo
            <img src="/icons/close.svg" alt="Ciclo encerrado"/>
          </button>
        ) : (
          <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
            <img src="/icons/play-arrow.svg" alt="Ciclo encerrado"/>
          </button>
         )}
        </>
      ) }

      
    </div>
    )
  }
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

type CountdownContextData = {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountDown: () => void;
}

type ChallengesProviderProps = {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: ChallengesProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setIsFinished] = useState(false);
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
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
      startNewChallenge();
    }
  }, [isActive, time])
  
  return (
    <CountdownContext.Provider 
    value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountDown,
    }}
    >
    {children}
    </CountdownContext.Provider>
    )
  }
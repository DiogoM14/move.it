import { createContext, useState, ReactNode } from 'react';

type ChallengesContexData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

type ChallengesProviderProps = {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContexData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLeve] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = () => {
    setLeve(level + 1);
  }

  const startNewChallenge = () => {
  }

  return (
    <ChallengesContext.Provider 
    value={{ 
      level, 
      currentExperience, 
      challengesCompleted,
      levelUp, 
      startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
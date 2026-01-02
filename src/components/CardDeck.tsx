import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import LoadingSpinner from './LoadingSpinner';
import { useTheme } from '../context/ThemeContext';

type Card = {
  id: number;
  back: string;
};

interface CardDeckProps {
  cards?: Card[];
}

const defaultCards: Card[] = [
  { id: 1, back: "Are you made of copper and tellurium? Because you're Cu-Te." },
  { id: 2, back: "You must be a catalyst, because you’re speeding up my reaction." },
  { id: 3, back: "Are you an electron? Because you make my heart race with just a spark." },
  { id: 4, back: "I must be a noble gas, because I never react… until I met you." },
  { id: 5, back: "Without you, my life is like a molecule with unpaired electrons—unstable." },
  { id: 6, back: "You and I have more chemistry than every element in the periodic table combined." },
  { id: 7, back: "No need for lab tests—I just proved we’ve got explosive chemistry." },
];

const CardDeck: React.FC<CardDeckProps> = ({ cards = defaultCards }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full">
      <h1 className={`text-4xl md:text-6xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Chemistry Love Punch Lines
      </h1>
      <p className={`text-center ${theme.textSecondary} mb-8 md:mb-12`}>Laugh if you’re reading something cringey.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {cards.map(card => (
          <FlipCard
            key={card.id}
            frontContent={
              <span className={`text-5xl font-bold ${theme.textAccent}`} style={{ textShadow: '1px 1px 2px #562b2b' }}>
                {card.id}
              </span>
            }
            backContent={
              <p className={`text-center ${theme.textPrimary} text-base md:text-lg leading-relaxed`}>
                {card.back}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CardDeck;

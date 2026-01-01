import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import LoadingSpinner from './LoadingSpinner';
import { useTheme } from '../context/ThemeContext';

interface CardDeckProps {
  cards: Array<{
    id: number;
    front: string;
    back: string;
    flipped: boolean;
  }>;
  onCardClick: (id: number) => void;
}

const CardDeck: React.FC<CardDeckProps> = ({ cards, onCardClick }) => {
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
        A Dozen Cringey Christmas Jokes
      </h1>
      <p className={`text-center ${theme.textSecondary} mb-12`}>Hover or tap a card to reveal a terrible pun!</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
        {cards.map(card => (
          <FlipCard
            key={card.id}
            frontContent={
              <span className={`text-5xl font-bold ${theme.textAccent}`} style={{ textShadow: '1px 1px 2px #562b2b' }}>
                {card.id}
              </span>
            }
            backContent={
              <p className={`text-center ${theme.textPrimary} text-md md:text-lg`}>
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

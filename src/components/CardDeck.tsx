
import React from 'react';
import { useChristmasJokes } from '../hooks/useChristmasJokes';
import FlipCard from './FlipCard';
import LoadingSpinner from './LoadingSpinner';
import { useTheme } from '../context/ThemeContext';

const CardDeck = () => {
    const { jokes, isLoading, error } = useChristmasJokes();
    const { theme } = useTheme();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="w-full">
            <h1 className={`text-4xl md:text-6xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                A Dozen Cringey Christmas Jokes
            </h1>
            <p className={`text-center ${theme.textSecondary} mb-12`}>Hover or tap a card to reveal a terrible pun!</p>
            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
                {jokes.map((joke, index) => (
                    <FlipCard
                        key={index}
                        frontContent={
                            <span className={`text-5xl font-bold ${theme.textAccent}`} style={{ textShadow: '1px 1px 2px #562b2b' }}>
                                {index + 1}
                            </span>
                        }
                        backContent={
                            <p className={`text-center ${theme.textPrimary} text-md md:text-lg`}>
                                {joke}
                            </p>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default CardDeck;

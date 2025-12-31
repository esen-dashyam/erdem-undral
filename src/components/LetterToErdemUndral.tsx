
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const LetterToErdemUndral = () => {
    const { theme } = useTheme();
    const [isOpened, setIsOpened] = useState(false);

    const letterContent = `
To the one who seeks,

The path you walk is woven from threads of moments past and dreams yet to come. Do not mistake the shadows for the end of the road; they are but proof that a light shines nearby.

Each challenge is a mountain, and from its peak, you will see how far you've come. The winds may howl, but they also carry the seeds of new forests. Trust the strength in your roots and the courage in your heart.

The journey is the destination. Walk it with purpose and kindness.

- E.U.
    `;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center" style={{ perspective: '1200px' }}>
            <h1 className={`text-4xl md:text-5xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                A Letter from Erdem-Undral
            </h1>
            <p className={`text-center ${theme.textSecondary} mb-8`}>A message has arrived.</p>

            <div
                className="w-full max-w-2xl cursor-pointer transition-transform duration-1000"
                style={{ transformStyle: 'preserve-3d', transform: isOpened ? 'rotateX(0deg)' : 'rotateX(75deg)' }}
                onClick={() => setIsOpened(!isOpened)}
                role="button"
                aria-expanded={isOpened}
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpened(!isOpened)}
            >
                <div className={`relative w-full min-h-[400px] p-8 md:p-12 rounded-lg shadow-2xl transition-all duration-1000 ${theme.secondary} ${isOpened ? 'bg-opacity-80' : 'bg-opacity-100'}`}>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isOpened ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-4 ${theme.accent} ${theme.primary}`}>
                                <span className={`text-3xl font-bold ${theme.textAccent}`}>E</span>
                            </div>
                            <p className={`${theme.textPrimary} font-semibold`}>Click to Read</p>
                        </div>
                    </div>

                    <div className={`transition-opacity duration-700 delay-500 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
                        <pre className={`whitespace-pre-wrap font-serif text-lg ${theme.textPrimary}`}>
                            {letterContent}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetterToErdemUndral;

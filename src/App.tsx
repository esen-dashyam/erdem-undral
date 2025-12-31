
import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Snowfall from './components/Snowfall';
import Envelope from './components/Envelope';
import LetterToErdemUndral from './components/LetterToErdemUndral';
import ActivitiesView from './components/ActivitiesView';
import Header from './components/Header';
import type { AppPhase, View } from './types';

const AppContent = () => {
    const { theme } = useTheme();
    const [appPhase, setAppPhase] = useState<AppPhase>('envelope');
    const [currentView, setCurrentView] = useState<View>('activities');

    const handleOpenEnvelope = () => {
        if (appPhase === 'envelope') {
            setAppPhase('opening');
        }
    };

    useEffect(() => {
        if (appPhase === 'opening') {
            // This duration allows the envelope animations to complete before showing the main app.
            const timer = setTimeout(() => {
                setAppPhase('main');
            }, 1800);
            return () => clearTimeout(timer);
        }
    }, [appPhase]);

    const renderView = () => {
        switch (currentView) {
            case 'letter':
                return <LetterToErdemUndral />;
            case 'activities':
            default:
                return <ActivitiesView />;
        }
    };

    return (
        <div className={`relative min-h-screen w-full ${theme.background} flex flex-col items-center justify-center overflow-hidden font-serif transition-colors duration-500`}>
            <Snowfall />
            <main className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
                {appPhase !== 'main' && (
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden={appPhase === 'main'}>
                        <Envelope appPhase={appPhase} onOpen={handleOpenEnvelope} />
                    </div>
                )}

                {appPhase === 'main' && (
                    <div className="w-full h-full flex flex-col animate-fade-in-main">
                        <Header currentView={currentView} setView={setCurrentView} />
                        <div className="flex-grow overflow-y-auto p-4 md:p-8 w-full">
                            {renderView()}
                        </div>
                    </div>
                )}
            </main>
            <style>{`
                @keyframes fade-in-main {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in-main { animation: fade-in-main 1s ease-out forwards; }
            `}</style>
        </div>
    );
};

const App = () => (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
);

export default App;

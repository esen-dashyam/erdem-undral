import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Snowfall from './components/Snowfall';
import Envelope from './components/Envelope';
import LetterToErdemUndral from './components/LetterToErdemUndral';
import ActivitiesView from './components/ActivitiesView';
import Header from './components/Header';
const AppContent = () => {
    const { theme } = useTheme();
    const [appPhase, setAppPhase] = useState('envelope');
    const [currentView, setCurrentView] = useState('activities');
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
                return _jsx(LetterToErdemUndral, {});
            case 'activities':
            default:
                return _jsx(ActivitiesView, {});
        }
    };
    return (_jsxs("div", { className: `relative min-h-screen w-full ${theme.background} flex flex-col items-center justify-center overflow-hidden font-serif transition-colors duration-500`, children: [_jsx(Snowfall, {}), _jsxs("main", { className: "relative z-10 w-full h-screen flex flex-col items-center justify-center", children: [appPhase !== 'main' && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center", "aria-hidden": appPhase === 'main', children: _jsx(Envelope, { appPhase: appPhase, onOpen: handleOpenEnvelope }) })), appPhase === 'main' && (_jsxs("div", { className: "w-full h-full flex flex-col animate-fade-in-main", children: [_jsx(Header, { currentView: currentView, setView: setCurrentView }), _jsx("div", { className: "flex-grow overflow-y-auto p-4 md:p-8 w-full", children: renderView() })] }))] }), _jsx("style", { children: `
                @keyframes fade-in-main {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in-main { animation: fade-in-main 1s ease-out forwards; }
            ` })] }));
};
const App = () => (_jsx(ThemeProvider, { children: _jsx(AppContent, {}) }));
export default App;

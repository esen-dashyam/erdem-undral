
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import type { View } from '../types';
import { ActivitiesIcon, LetterIcon } from '../assets/icons';

interface HeaderProps {
    currentView: View;
    setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
    const { theme } = useTheme();

    const navItems: { view: View; label: string; icon: React.ReactNode }[] = [
        { view: 'activities', label: 'Festive Activities', icon: <ActivitiesIcon /> },
        { view: 'letter', label: 'Letter to Erdem-Undral', icon: <LetterIcon /> },
    ];

    return (
        <header className={`w-full p-4 ${theme.textPrimary} shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 z-20 flex-shrink-0`}>
            <h1 className="text-2xl font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Festive Fun Hub</h1>
            <nav className="flex items-center justify-center gap-2 sm:gap-4">
                {navItems.map(item => (
                    <button
                        key={item.view}
                        onClick={() => setView(item.view)}
                        className={`flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${currentView === item.view ? `${theme.secondary} ${theme.textAccent}` : `hover:bg-white/10`}`}
                        aria-current={currentView === item.view ? 'page' : undefined}
                    >
                        {item.icon}
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                    </button>
                ))}
            </nav>
            {/* Theme selector removed as per request */}
        </header>
    );
};

export default Header;

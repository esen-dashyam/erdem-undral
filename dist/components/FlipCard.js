import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { theme } = useTheme();
    const handleFlip = () => setIsFlipped(f => !f);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleFlip();
        }
    };
    return (_jsx("div", { className: `w-full h-48 bg-transparent cursor-pointer group focus:outline-none focus:ring-2 focus:${theme.accent.replace('border-', 'ring-')} focus:ring-offset-4 focus:ring-offset-transparent rounded-lg`, style: { perspective: '1000px' }, onClick: handleFlip, onKeyDown: handleKeyDown, tabIndex: 0, role: "button", "aria-pressed": isFlipped, children: _jsxs("div", { className: "relative w-full h-full transition-transform duration-700 ease-in-out", style: { transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }, children: [_jsx("div", { className: `absolute w-full h-full ${theme.primary} border-4 ${theme.accent} rounded-lg shadow-lg flex items-center justify-center group-hover:brightness-110 transition-all`, style: { backfaceVisibility: 'hidden' }, children: frontContent }), _jsx("div", { className: `absolute w-full h-full ${theme.secondary} border-4 ${theme.accent} rounded-lg shadow-lg flex items-center justify-center p-4`, style: { backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }, children: backContent })] }) }));
};
export default FlipCard;

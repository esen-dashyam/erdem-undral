import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs("div", { className: "w-full max-w-4xl mx-auto flex flex-col items-center", style: { perspective: '1200px' }, children: [_jsx("h1", { className: `text-4xl md:text-5xl font-bold text-center ${theme.textPrimary} mb-4`, style: { textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }, children: "A Letter from Erdem-Undral" }), _jsx("p", { className: `text-center ${theme.textSecondary} mb-8`, children: "A message has arrived." }), _jsx("div", { className: "w-full max-w-2xl cursor-pointer transition-transform duration-1000", style: { transformStyle: 'preserve-3d', transform: isOpened ? 'rotateX(0deg)' : 'rotateX(75deg)' }, onClick: () => setIsOpened(!isOpened), role: "button", "aria-expanded": isOpened, tabIndex: 0, onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && setIsOpened(!isOpened), children: _jsxs("div", { className: `relative w-full min-h-[400px] p-8 md:p-12 rounded-lg shadow-2xl transition-all duration-1000 ${theme.secondary} ${isOpened ? 'bg-opacity-80' : 'bg-opacity-100'}`, children: [_jsx("div", { className: `absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isOpened ? 'opacity-0' : 'opacity-100'}`, children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-4 ${theme.accent} ${theme.primary}`, children: _jsx("span", { className: `text-3xl font-bold ${theme.textAccent}`, children: "E" }) }), _jsx("p", { className: `${theme.textPrimary} font-semibold`, children: "Click to Read" })] }) }), _jsx("div", { className: `transition-opacity duration-700 delay-500 ${isOpened ? 'opacity-100' : 'opacity-0'}`, children: _jsx("pre", { className: `whitespace-pre-wrap font-serif text-lg ${theme.textPrimary}`, children: letterContent }) })] }) })] }));
};
export default LetterToErdemUndral;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useChristmasJokes } from '../hooks/useChristmasJokes';
import FlipCard from './FlipCard';
import LoadingSpinner from './LoadingSpinner';
import { useTheme } from '../context/ThemeContext';
const CardDeck = () => {
    const { jokes, isLoading, error } = useChristmasJokes();
    const { theme } = useTheme();
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "w-full", children: [_jsx("h1", { className: `text-4xl md:text-6xl font-bold text-center ${theme.textPrimary} mb-4`, style: { textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }, children: "A Dozen Cringey Christmas Jokes" }), _jsx("p", { className: `text-center ${theme.textSecondary} mb-12`, children: "Hover or tap a card to reveal a terrible pun!" }), error && _jsx("p", { className: "text-red-400 text-center mb-4", children: error }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8", children: jokes.map((joke, index) => (_jsx(FlipCard, { frontContent: _jsx("span", { className: `text-5xl font-bold ${theme.textAccent}`, style: { textShadow: '1px 1px 2px #562b2b' }, children: index + 1 }), backContent: _jsx("p", { className: `text-center ${theme.textPrimary} text-md md:text-lg`, children: joke }) }, index))) })] }));
};
export default CardDeck;

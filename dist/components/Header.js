import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../context/ThemeContext';
import { ActivitiesIcon, LetterIcon } from '../assets/icons';
const Header = ({ currentView, setView }) => {
    const { theme } = useTheme();
    const navItems = [
        { view: 'activities', label: 'Festive Activities', icon: _jsx(ActivitiesIcon, {}) },
        { view: 'letter', label: 'Letter to Erdem-Undral', icon: _jsx(LetterIcon, {}) },
    ];
    return (_jsxs("header", { className: `w-full p-4 ${theme.textPrimary} shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 z-20 flex-shrink-0`, children: [_jsx("h1", { className: "text-2xl font-bold", style: { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }, children: "Festive Fun Hub" }), _jsx("nav", { className: "flex items-center justify-center gap-2 sm:gap-4", children: navItems.map(item => (_jsxs("button", { onClick: () => setView(item.view), className: `flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${currentView === item.view ? `${theme.secondary} ${theme.textAccent}` : `hover:bg-white/10`}`, "aria-current": currentView === item.view ? 'page' : undefined, children: [item.icon, _jsx("span", { className: "text-xs sm:text-sm font-semibold", children: item.label })] }, item.view))) })] }));
};
export default Header;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../context/ThemeContext';
const Snowfall = () => {
    const { theme } = useTheme();
    const isLightTheme = theme.name === 'Winter Wonderland';
    const snowflakeColor = isLightTheme ? 'rgba(100, 100, 120, 0.5)' : 'white';
    const snowflakes = Array.from({ length: 50 }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 8 + 7}s`, // 7s to 15s
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.6 + 0.2, // 0.2 to 0.8
            transform: `scale(${Math.random() * 0.6 + 0.4})`, // 0.4 to 1.0
        };
        return _jsx("div", { className: "snowflake", style: style, "aria-hidden": "true" }, i);
    });
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
                @keyframes snowfall {
                    0% { transform: translateY(-10vh) rotate(0deg); }
                    100% { transform: translateY(110vh) rotate(360deg); }
                }
                .snowflake {
                    position: fixed;
                    top: -10vh;
                    width: 10px;
                    height: 10px;
                    background: ${snowflakeColor};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                    animation-name: snowfall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            ` }), _jsx("div", { className: "fixed top-0 left-0 w-full h-full pointer-events-none", children: snowflakes })] }));
};
export default Snowfall;

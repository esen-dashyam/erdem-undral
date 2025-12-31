import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useMemo } from 'react';
import { themes } from '../constants/themes';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [themeName] = useState('classic');
    const theme = useMemo(() => themes[themeName], [themeName]);
    const value = {
        theme,
        themeName,
    };
    return _jsx(ThemeContext.Provider, { value: value, children: children });
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

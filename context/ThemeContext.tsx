
import React, { createContext, useState, useContext, useMemo } from 'react';
import { themes } from '../constants/themes';
import type { Theme, ThemeName } from '../types';

interface ThemeContextType {
    theme: Theme;
    themeName: ThemeName;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeName] = useState<ThemeName>('classic');

    const theme = useMemo(() => themes[themeName], [themeName]);

    const value = {
        theme,
        themeName,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

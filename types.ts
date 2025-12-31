
export type AppPhase = 'envelope' | 'opening' | 'main';
export type View = 'activities' | 'letter';

export interface Theme {
  name: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
}

export type ThemeName = 'classic' | 'winterWonderland' | 'goldenNight';

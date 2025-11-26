import React, { createContext, useContext, useState, useEffect } from 'react';

// Define all theme configurations
export const themes = {
  space: {
    name: 'Space',
    colors: {
      primary: '#ED6165',
      secondary: '#FFF',
      background: '#000000',
      starColor: '#FFF',
      starGlow: 'rgba(255, 255, 255, 0.8)',
      accentLight: '#ff999c',
      accentDark: '#d14548',
      textPrimary: '#fff',
      textSecondary: '#8d8d8d',
      cardBg: 'rgba(255, 255, 255, 0.05)',
      cardBorder: 'rgba(255, 255, 255, 0.1)',
    },
    gradient: 'linear-gradient(135deg, #000000 0%, #1a0a0a 100%)',
  },
  nebula: {
    name: 'Nebula',
    colors: {
      primary: '#B794F6',
      secondary: '#F8B4D9',
      background: '#0a0118',
      starColor: '#E9D5FF',
      starGlow: 'rgba(233, 213, 255, 0.8)',
      accentLight: '#DDA0DD',
      accentDark: '#8B008B',
      textPrimary: '#F8B4D9',
      textSecondary: '#B794F6',
      cardBg: 'rgba(183, 148, 246, 0.05)',
      cardBorder: 'rgba(183, 148, 246, 0.2)',
    },
    gradient: 'linear-gradient(135deg, #0a0118 0%, #1e0a3c 50%, #3d1a5f 100%)',
  },
  solar: {
    name: 'Solar',
    colors: {
      primary: '#FF6B35',
      secondary: '#FFA500',
      background: '#1a0800',
      starColor: '#FFD700',
      starGlow: 'rgba(255, 215, 0, 0.8)',
      accentLight: '#FFD166',
      accentDark: '#C1440E',
      textPrimary: '#FFA500',
      textSecondary: '#FF8C42',
      cardBg: 'rgba(255, 107, 53, 0.05)',
      cardBorder: 'rgba(255, 165, 0, 0.2)',
    },
    gradient: 'linear-gradient(135deg, #1a0800 0%, #331100 50%, #4d1a00 100%)',
  },
  aurora: {
    name: 'Aurora',
    colors: {
      primary: '#00FFA3',
      secondary: '#00D9FF',
      background: '#000d14',
      starColor: '#7FFFD4',
      starGlow: 'rgba(127, 255, 212, 0.8)',
      accentLight: '#5FFBF1',
      accentDark: '#00A86B',
      textPrimary: '#00FFA3',
      textSecondary: '#00D9FF',
      cardBg: 'rgba(0, 255, 163, 0.05)',
      cardBorder: 'rgba(0, 217, 255, 0.2)',
    },
    gradient: 'linear-gradient(135deg, #000d14 0%, #001a28 50%, #00334d 100%)',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      primary: '#FF2E97',
      secondary: '#00F0FF',
      background: '#0a0014',
      starColor: '#FF2E97',
      starGlow: 'rgba(255, 46, 151, 0.8)',
      accentLight: '#FF6EC7',
      accentDark: '#C1004F',
      textPrimary: '#FF2E97',
      textSecondary: '#00F0FF',
      cardBg: 'rgba(255, 46, 151, 0.05)',
      cardBorder: 'rgba(0, 240, 255, 0.2)',
    },
    gradient: 'linear-gradient(135deg, #0a0014 0%, #1a0033 50%, #2d0052 100%)',
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Load saved theme from localStorage or default to 'space'
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved && themes[saved] ? saved : 'space';
  });

  // Update CSS variables when theme changes
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;

    // Set all CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    root.style.setProperty('--gradient', theme.gradient);

    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    switchTheme,
    availableThemes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

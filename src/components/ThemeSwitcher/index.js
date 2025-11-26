import { useState } from 'react';
import { useTheme, themes } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const ThemeSwitcher = () => {
  const { currentTheme, switchTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeName) => {
    switchTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
      >
        <FontAwesomeIcon icon={faPalette} />
      </button>

      {isOpen && (
        <>
          <div className="theme-backdrop" onClick={() => setIsOpen(false)} />
          <div className="theme-menu">
            <div className="theme-menu-header">
              <h3>Choose Theme</h3>
            </div>
            <div className="theme-options">
              {availableThemes.map((themeName) => {
                const theme = themes[themeName];
                const isActive = currentTheme === themeName;

                return (
                  <button
                    key={themeName}
                    className={`theme-option ${isActive ? 'active' : ''}`}
                    onClick={() => handleThemeChange(themeName)}
                    style={{
                      '--theme-primary': theme.colors.primary,
                      '--theme-secondary': theme.colors.secondary,
                      '--theme-bg': theme.colors.background,
                    }}
                  >
                    <div className="theme-preview">
                      <div
                        className="theme-color-circle"
                        style={{ background: theme.colors.primary }}
                      />
                      <div
                        className="theme-color-circle"
                        style={{ background: theme.colors.secondary }}
                      />
                    </div>
                    <div className="theme-info">
                      <span className="theme-name">{theme.name}</span>
                    </div>
                    {isActive && <div className="active-indicator">✓</div>}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;

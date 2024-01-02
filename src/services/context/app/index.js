import React, {createContext, useState, useEffect} from 'react';
import {themes} from '../../../shared/constants/themes';
import locales from '../../../locales';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKeys} from '../../../shared/constants/keys';
import colors from '../../../shared/theme/colors';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  // State variables for theme, locale, and colors
  const [theme, setTheme] = useState(themes.light);
  const [locale, setLocale] = useState(locales.en_US);
  const color = theme === themes.dark ? colors.dark : colors.light;

  // Load settings from AsyncStorage on component mount
  useEffect(() => {
    loadSettings();
  }, []);

  /**
   * Save theme and locale settings to AsyncStorage
   */
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem(asyncStorageKeys.theme, theme);
      await AsyncStorage.setItem(asyncStorageKeys.locale, locale);
    } catch (error) {
      console.error('🚀 ~ file: index.js:23 ~ saveSettings ~ error:', error);
    }
  };

  /**
   * Load theme and locale settings from AsyncStorage
   */
  const loadSettings = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(asyncStorageKeys.theme);
      const savedLocale = await AsyncStorage.getItem(asyncStorageKeys.locale);

      if (savedTheme) {
        setTheme(savedTheme);
      }

      if (savedLocale) {
        setLocale(savedLocale);
      }
    } catch (error) {
      console.error('🚀 ~ file: index.js:40 ~ loadSettings ~ error:', error);
    }
  };

  /**
   * Change the app's locale and save the settings
   * @param {Object} newLocale - New locale object with strings
   */
  const changeLocale = newLocale => {
    setLocale(newLocale);
    saveSettings();
  };

  /**
   * Toggle between light and dark themes and save the settings
   */
  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themes.dark ? themes.light : themes.dark,
    );
    saveSettings();
  };

  // Provide the context value to the app
  return (
    <AppContext.Provider
      value={{theme, toggleTheme, color, changeLocale, locale}}>
      {children}
    </AppContext.Provider>
  );
};

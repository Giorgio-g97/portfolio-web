import React, { children, createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'//di default è light, ma se impostato, recupera il tema dal localStorage
    );


    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);//salva il tema impostato nel localStorage
    }, [theme])//ad ogni cambio del tema

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log('Tema cambiato in ', theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
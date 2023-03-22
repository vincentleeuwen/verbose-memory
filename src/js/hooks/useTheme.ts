import { useState } from 'react';

export interface ThemeProps {
    darkTheme: boolean,
    toggleTheme: () => void,
}

export default function useTheme() : ThemeProps {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    const toggleTheme = () => setDarkTheme(!darkTheme);

    return {
        darkTheme,
        toggleTheme,
    }
}
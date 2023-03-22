import { createContext } from 'react';

import { themes } from './types';

interface ContextType {
    theme: themes;
    setTheme: (theme: themes) => void;
}

export const AppContext = createContext<ContextType>({} as ContextType);

export {
    themes,
}
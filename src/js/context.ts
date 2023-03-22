import { createContext } from 'react';

import { themes } from './types';

export interface ContextType {
    theme: themes;
    setTheme: (theme: themes) => void;
}

export const AppContext = createContext<ContextType | null>(null);

export {
    themes,
}
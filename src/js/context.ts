import { createContext } from 'react';

import { ThemeProps } from './hooks/useTheme';

export const AppContext = createContext<ThemeProps>({} as ThemeProps);

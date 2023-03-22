import { useState } from 'react';

import { AppContext } from './context';
import { themes } from './types';
import Footer from './components/Footer';
import Header from './components/Header';
import Laureates from './components/Main/Laureates';

const App = () => {
    const [theme, setTheme] = useState<themes>(themes.light);

    const contextProps = {
        theme,
        setTheme,
    }

    return (
        <AppContext.Provider value={contextProps}>
            <Header />
            <Laureates />
            <Footer />
        </AppContext.Provider>        
    )
}

export default App;
import { AppContext } from './context';
import Footer from './components/Footer';
import Header from './components/Nav/Header';
import Laureates from './components/Main/Laureates';

import useTheme, { ThemeProps } from './hooks/useTheme';


const App = () => {
    const { darkTheme, toggleTheme } = useTheme();

    const contextProps : ThemeProps = {
        darkTheme,
        toggleTheme,
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
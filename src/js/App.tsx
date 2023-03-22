import Footer from './components/Footer';
import Laureates from './components/Main/Laureates';
import Header from './components/Nav/Header';
import useTheme, { ThemeProps } from './hooks/useTheme';
import { AppContext } from './context';

const App = () => {
  const { darkTheme, toggleTheme } = useTheme();

  const contextProps: ThemeProps = {
    darkTheme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextProps}>
      <Header />
      <Laureates />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;

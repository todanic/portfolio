import { Header } from "./containers/header/Header";
import { Splash } from "./containers/splash/Splash";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { getItem } from './hooks/localStorage';

function App() {
  const theme = getItem('theme');

  return (
    <div className={(theme === 'dark' ? 'dark:bg-darkBgColor dark:text-white ' : '') + 'transition-all duration-300 ease-in-out'}>
      <ThemeContextProvider>
        <Header />
        <Splash />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

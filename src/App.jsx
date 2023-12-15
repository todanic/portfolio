import { Header } from "./containers/header/Header";
import { useLocalStorage } from "./hooks/localStorage"
import { StyleProvider } from "./contexts/StyleContext";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
      </StyleProvider>
    </div>
  );
}

export default App;

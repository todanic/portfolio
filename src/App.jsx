import { Header } from "./containers/header/Header";
import Skills from "./containers/skills/Skills";
import { Splash } from "./containers/splash/Splash";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { getItem } from "./hooks/useLocalStorage";
import { experience, skills, projects } from "./consts.js";
import { Experiences } from "./containers/experiences/Experiences.jsx";
import { Projects } from "./containers/projects/Projects.jsx";
import { Footer } from "./containers/footer/Footer.jsx";

function App() {
  const theme = getItem("theme");
  console.log(theme);
  return (
    <div
      className={
        (theme === "dark" ? "dark:bg-darkBgColor dark:text-white " : "") +
        "transition-all duration-300 ease-in-out"
      }>
      <ThemeContextProvider>
        <Header />
        <Splash />
        <Skills skills={skills} />
        <Experiences experiences={experience} />
        <Projects projects={projects} />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

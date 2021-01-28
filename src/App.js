import "./App.css";
import BarreDeNav from "./components/barreDeNav/BarreDeNav";
import Presentation from "./components/Presentation";
import Reseaux from "./components/Reseaux";
import ExperiencesPro from "./components/ExperiencesPro";
import Loisirs from "./components/Loisirs";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BarreDeNav />
      <Presentation />
      <Reseaux />
      <ExperiencesPro />
      <Loisirs />
      <Competences />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import BarreDeNav from "./components/BarreDeNav";
import Presentation from "./components/Presentation";
import Reseaux from "./components/Reseaux";
import ExperiencesPro from "./components/ExperiencesPro";

function App() {
  return (
    <div className="App">
      <BarreDeNav />
      <Presentation />
      <Reseaux />
      <ExperiencesPro />
    </div>
  );
}

export default App;

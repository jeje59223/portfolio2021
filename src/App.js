import './App.css';
import BarreDeNav from "./components/BarreDeNav";
import Presentation from "./components/Presentation";
import Reseaux from "./components/Reseaux";

function App() {
  return (
    <div className="App">
      <BarreDeNav />
      <Presentation />
      <Reseaux />
    </div>
  );
}

export default App;

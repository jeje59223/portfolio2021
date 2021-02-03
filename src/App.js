import './App.css';
// eslint-disable-next-line no-unused-vars
import BarreDeNav from './components/barreDeNav/BarreDeNav';
// eslint-disable-next-line no-unused-vars
import Presentation from './components/Presentation';
// eslint-disable-next-line no-unused-vars
import Reseaux from './components/Reseaux';
// eslint-disable-next-line no-unused-vars
import ExperiencesPro from './components/ExperiencesPro';
// eslint-disable-next-line no-unused-vars
import Loisirs from './components/Loisirs';
// eslint-disable-next-line no-unused-vars
import Competences from './components/Competences';
// eslint-disable-next-line no-unused-vars
import Projets from './components/Projets';
// eslint-disable-next-line no-unused-vars
import Contact from './components/Contact';
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer';

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

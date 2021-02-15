import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import BarreDeNav from './components/barreDeNav/BarreDeNav';
import TextIntro from './components/textIntro/TextIntro';
import Presentation from './components/presentation/Presentation';
import Reseaux from './components/reseaux/Reseaux';
import ExperiencesPro from './components/experiencesPro/ExperiencesPro';
import Loisirs from './components/loisirs/Loisirs';
import Competences from './components/competences/Competences';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import DetailProject from './DetailProject';
import projets from './data/projets.json';

function App() {
  return (
    <div className="App">
      <BarreDeNav />
      <Router>
        <Route exact path="/">
          <TextIntro />
          <Presentation />
          <Reseaux />
          <ExperiencesPro />
          <Loisirs />
          <Competences />
          <Projets />
          <Contact />
        </Route>
        <Route path="/detail/:id">
          <DetailProject projet={projets} />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

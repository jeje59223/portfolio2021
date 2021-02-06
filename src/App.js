import React from 'react';
import './App.css';
import BarreDeNav from './components/barreDeNav/BarreDeNav';
import Presentation from './components/presentation/Presentation';
import Reseaux from './components/reseaux/Reseaux';
import ExperiencesPro from './components/experiencesPro/ExperiencesPro';
import Loisirs from './components/loisirs/Loisirs';
import Competences from './components/competences/Competences';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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

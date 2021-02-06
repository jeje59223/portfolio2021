import React from 'react';
import '../../styles/projets.css';
import CardsProjects from '../cardsProjects/CardsProjets';
import data from '../../data/projets.json';

const Projets = () => (
  <section id="portfolio">
    <h2 className="text-center h2Portfolio">Portfolio</h2>
    <div className="row">
      {
                data.map((projet) => (
                  <CardsProjects projet={projet} key={projet.id} />
                ))
            }
    </div>
  </section>
);

export default Projets;

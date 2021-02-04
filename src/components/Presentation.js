// eslint-disable-next-line no-unused-vars
import React from 'react';
import moi from '../images/moi.jpeg';
import '../styles/presentation.css';

const Presentation = () => (
  <section id="presentation">
    <div className="container">
      <h2 className="text-center h2Presentation">Présentation</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>A Propos</h2>
          <hr />
          {/* eslint-disable-next-line max-len */}
          <p>
            Bonjour, j'ai découvert le plaisir de coder en manipulant des cartes arduino et raspberry,
            {/* eslint-disable-next-line max-len */}
            j'y ai pris goût et ai décidé de me reconvertir vers un métier qui fait appel à ce type de
            {/* eslint-disable-next-line max-len */}
            compétence, c'est à dire développeur concepteur d'applications. J'ai beaucoup appris par
            {/* eslint-disable-next-line max-len */}
            moi-même via des cours sur le net. En 2019, j'ai fait un fongécif, chez M2I Formation Villeneuve d'Ascq
            {/* eslint-disable-next-line max-len */}
            pour découvrir le métier de développeur. J'ai eu une première expérience de développeur back-end PHP
            {/* eslint-disable-next-line max-len */}
            chez ITROOM sur Hem. Puis j'ai eu l'opportunité de participer à un bootcamp de trois mois chez Fewlines à
            {/* eslint-disable-next-line max-len */}
            Lille, qui m'a permis d'intégrer le siège Leroy Merlin en tant de développeur web.
          </p>
        </div>
        <div className="col-md-6 text-center imagePresentation">
          <img src={moi} alt="Jérôme Cnockaert" />
        </div>
      </div>
    </div>
  </section>
);

export default Presentation;

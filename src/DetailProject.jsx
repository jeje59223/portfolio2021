import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/detailProjet.css';
import gamescatalog from './images/dbz.png';
import cinevormoi from './images/cinevormoi.png';
import productlocator from './images/productlocator.png';
import flashcards from './images/flashcards.png';
import spotify from './images/spotify.png';
import meteojeje from './images/meteojeje.png';
import pokemon from './images/pokemon.png';
import biblio from './images/biblio.png';

export default function DetailProject({ projet }) {
  const { id } = useParams();
  const project = projet[id - 1];
  const imagesProjets = [
    gamescatalog,
    cinevormoi,
    productlocator,
    flashcards,
    spotify,
    meteojeje,
    pokemon,
    biblio,
  ];

  return (
    <div className="detailProject">
      <h2 className="text-center border border-secondary p-3 mt-5 mb-5 m-auto rounded w-50 bg-dark text-white">
        {`Détail du projet : ${project.title}`}
      </h2>
      <div style={{ textAlign: 'center' }}>
        <img style={{ width: '70%', alignItems: 'center' }} src={imagesProjets[id - 1]} alt={project.title} />
      </div>
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        { project.description }
      </p>
      <p style={{ textAlign: 'center' }}>
        {
          project.technologies.map(
            (t) => <span key={project.id} className="badge bg-secondary m-1">{t.name}</span>,
          )
        }
      </p>
    </div>
  );
}

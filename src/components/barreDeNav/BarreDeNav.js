// eslint-disable-next-line no-unused-vars
import React from 'react';
import moi from '../../images/moi.jpeg';
// eslint-disable-next-line no-unused-vars
import TextIntro from '../TextIntro';
import '../../styles/barreDeNav.css';

const BarreDeNav = () => (
        <header id="top">
            <div className="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="main-nav">
                    <div className="container">
                        <a href="index.html" className="navbar-brand"><img src={moi} alt="moi"/></a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-3">
                                    <a href="#top" className="nav-link">Accueil</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a href="#presentation" className="nav-link">Présentation</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a href="#experiencesProfessionnelles" className="nav-link">Expériences Professionnelles</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a href="#competences" className="nav-link">Compétences</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a href="#portfolio" className="nav-link">Projets</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <TextIntro />
            </div>
        </header>
);

export default BarreDeNav;

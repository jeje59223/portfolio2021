import React from "react";
import moi from "../images/moi.jpeg";
import TextIntro from "./TextIntro";

const BarreDeNav = () => {
    return (
        <header id="top">
            <div class="container">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="main-nav">
                    <div class="container">
                        <a href="index.html" class="navbar-brand"><img src={moi}/></a>
                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item mr-3">
                                    <a href="#top" class="nav-link">Accueil</a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a href="#presentation" class="nav-link">Présentation</a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a href="#experiencesProfessionnelles" class="nav-link">Expériences Professionnelles</a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a href="#competences" class="nav-link">Compétences</a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a href="#portfolio" class="nav-link">Projets</a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a href="#contact" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <TextIntro />
            </div>
        </header>
    )
}

export default BarreDeNav;
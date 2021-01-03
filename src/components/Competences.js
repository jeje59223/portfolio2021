import React from "react";
import "../styles/competences.css"
import html from "../images/html5.png";
import css from "../images/css3.png";
import javascript from "../images/js.png";
import next from "../images/nextjs.png";
import react from "../images/react.png";
import node from "../images/node.png";

const Competences = () => {
    return (
        <section id="competences">
            <div class="container">
                <h2 class="text-center h2Loisirs">Mes Compétences</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 competences">
                        <h2>Comment je me suis formé ?</h2>
                        <hr/>
                        <p>
                            Je suis d'abord et avant tout un passionné ! J'adore apprendre et avant t'intégrer M2I Formations j'ai suivi
                            beaucoup de tutoriel sur internet et me suis formé en autodidacte sur OpenClassRoom, Udemy, CodeCademy, H2PROG, etc...
                            J'ai ensuite suivi une formation de Développeur Concepteur d'application et obtenu le certificat professionnel RNCP, niveau II (licence).
                            Enfin j'ai suivi un bootcamp de trois mois chez Fewlines à Lille, qui m'a permis d'intégrer le siège Leroy Merlin en tant sue développeur web.
                        </p>
                    </div>
                    <div class="col-md-6 pt-1">
                        <div class="col text-center">
                            <img src={html} alt="html5"/>
                            <img src={css} alt="css3"/>
                            <img src={javascript} alt="javascript"/>
                        </div>
                        <div class="col text-center">
                            <img src={next} alt="nextJs"/>
                            <img src={react} alt="react"/>
                            <img src={node} alt="nodeJS"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competences;
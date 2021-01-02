import React from "react";
import moi from "../images/moi.jpeg";
import "../styles/presentation.css";

const Presentation = () => {
    return (
        <section id="presentation">
            <div class="container">
                <h2 class="text-center h2Presentation">Présentation</h2>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2>A Propos</h2>
                        <hr/>
                        <p>Bonjour, j'ai découvert le plaisir de coder en manipulant des cartes arduino et raspberry, 
                            j'y ai pris goût et ai décidé de me reconvertir vers un métier qui fait appel à ce type de 
                            compétence, c'est à dire développeur concepteur d'applications. J'ai beaucoup appris par 
                            moi-même via des cours sur le net. En 2019, j'ai fait un fongécif, chez M2I Formation Villeneuve d'Ascq 
                            pour découvrir le métier de développeur. J'ai eu une première expérience de développeur back-end PHP 
                            chez ITROOM sur Hem. Puis j'ai eu l'opportunité de participer à un bootcamp de trois mois chez Fewlines à 
                            Lille, qui m'a permis d'intégrer le siège Leroy Merlin en tant de développeur web.
                        </p>
                    </div>
                    <div class="col-md-6 text-center imagePresentation">
                        <img src={moi} alt="Jérôme Cnockaert"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation;
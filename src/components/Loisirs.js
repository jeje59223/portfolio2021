import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/loisirs.css";

const Loisirs = () => {
    return (
        <section id="loisirs" class="py-2">
        <h2 class="text-center h2Loisirs">Mes Loisirs</h2>
            <div id="carouselContent">
            <Carousel>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Programmation de robots via des cartes Arduino"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Le Football, le Cyclisme et le Ski"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Le Bricolage et le Jardinage"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Les Jeux Vidéo"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Passer du temps avec mes filles !"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="text-center p-4">
                        <p class="font-italic">"Réaliser des projets perso dans le but d'apprendre de nouvelles techno"</p>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </section>
    )
}

export default Loisirs;
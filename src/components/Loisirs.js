import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/loisirs.css";
import data from "../data/loisirs.json";

const Loisirs = () => {
    console.log(data);
    return (
        <section id="loisirs" className="py-2">
            <h2 className="text-center h2Loisirs">Mes Loisirs</h2>
            <div id="carouselContent">
            <Carousel>
            {
                data.map((loisir) => {
                    return (
                        <Carousel.Item key={loisir.id}>
                            <div className="text-center p-4">
                                <p className="font-italic">{loisir.title}</p>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
            </Carousel>
            </div>
        </section>
    )
}

export default Loisirs;
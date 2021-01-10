import React from "react";
import "../styles/projets.css";
import CardsProjects from "./CardsProjets";
import data from "../data/projets.json";



const Projets = () => {
    
    return (
        <section id="portfolio">
            <h2 className="text-center h2Portfolio">Portfolio</h2>
            <div className="row">
            {
                data.map((projet) => {
                    return (
                        <CardsProjects projet={projet}/>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Projets;

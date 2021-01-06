import React from "react";
import "../styles/projets.css";
import dbz from "../images/dbz.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from "../data/projets.json";

const Projets = () => {
    console.log(data[0].image);
    return (
        <section id="portfolio">
            <h2 className="text-center h2Portfolio">Portfolio</h2>
            <div className="row">
            {
                data.map((projet) => {
                    return (
                        <div className="col-3" key={projet.id}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={dbz} alt={projet.title}/>
                            {console.log(`../images/${projet.image}`)}
                            <Card.Body className="text-center">
                                <Card.Title>{projet.title}</Card.Title>
                                <Card.Text>
                                {projet.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                            </Card>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Projets;
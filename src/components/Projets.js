import React from "react";
import "../styles/projets.css";
import dbz from "../images/dbz.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projets = () => {
    return (
        <>
        <section id="portfolio">
            <h2 class="text-center h2Portfolio">Portfolio</h2>
            <div className="row">
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Games-Catalog</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Cinévor-moi</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Product-Locator</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Flash-Cards</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
                <div className="col-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dbz} />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center"><Button variant="secondary">Go somewhere</Button></Card.Footer>
                </Card>
                </div>
            </div>
        </section>
        
</>
    )
}

export default Projets;
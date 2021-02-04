// eslint-disable-next-line no-unused-vars
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line no-unused-vars
import { Button } from 'react-bootstrap';
import gamescatalog from '../images/dbz.png';
import cinevormoi from '../images/cinevormoi.png';
import productlocator from '../images/productlocator.png';
import flashcards from '../images/flashcards.png';
import spotify from '../images/spotify.png';
import meteojeje from '../images/meteojeje.png';
import pokemon from '../images/pokemon.png';
import biblio from '../images/biblio.png';

const CardsProjects = ({ projet }) => {
  // eslint-disable-next-line max-len
  const imagesProjets = [gamescatalog, cinevormoi, productlocator, flashcards, spotify, meteojeje, pokemon, biblio];
  return (
    <div className="col-12 col-md-6 col-lg-4" key={projet.id}>
      <Card style={{ minWidth: '18rem' }} className="projetsCards m-5">
        <Card.Header className="bg-dark cardhead">
          <Card.Img
            className="img"
            variant="top"
            src={imagesProjets[projet.id - 1]}
            alt={projet.title}
          />
        </Card.Header>
        <Card.Body className="text-center cardBody">
          <Card.Title>{projet.title}</Card.Title>
          <Card.Text>{projet.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <Button variant="secondary">Details</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardsProjects;

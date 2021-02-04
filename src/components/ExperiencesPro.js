import '../styles/experiencesPro.css';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line no-unused-vars
import { Accordion } from 'react-bootstrap';
import data from '../data/experiencesPro.json';

const ExperiencesPro = () => (
  <section id="experiencesProfessionnelles">
    <div className="container">
      <h2 className="text-center h2ExperiencesProfessionnelles">Expériences Professionnelles</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>{data[0].periode}</h2>
          <hr />
          <h4>
            {data[0].entreprise}
            {' '}
            à
            {' '}
            {data[0].ville}
            {' '}
            |
            {' '}
            {data[0].poste}
            {' '}
          </h4>
          <p>
            <span className="fw-bold">Tâches réalisées : </span>
            {data[0].missions}
          </p>
        </div>
        <div className="col-md-6">
          <Accordion defaultActiveKey="1">
            {
                        data.map((experience, index) => (
                          <Card key={index}>
                            <Accordion.Toggle as={Card.Header} eventKey={experience.id} className="head">
                              {experience.periode}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={experience.id}>
                              <Card.Body>
                                {/* eslint-disable-next-line max-len */}
                                <h4>
                                  {experience.entreprise}
                                  {' '}
                                  à
                                  {' '}
                                  {experience.ville}
                                  {' '}
                                  |
                                  {' '}
                                  {experience.poste}
                                </h4>
                                <p>
                                  <span className="fw-bold">Tâches réalisées :</span>
                                  {experience.missions}
                                </p>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        ))
                    }
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default ExperiencesPro;

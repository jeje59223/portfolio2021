import React from "react";
import "../styles/experiencesPro.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const ExperiencesPro = () => {
    return (
        <section id="experiencesProfessionnelles">
            <div className="container">
                <h2 className="text-center h2ExperiencesProfessionnelles">Expériences Professionnelles</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>De 2003 à Aujourd'hui</h2>
                        <hr/>
                        <h4>Leroy Merlin Villeneuve d'Ascq | Conseiller de vente expert </h4>
                        <p>
                            <span className="fw-bold">Tâches réalisées :</span> Fiabilisation des stocks et du taux de rupture. "commandes, relevés de ruptures, 
                            inventaires,....". Suivi des indicateurs pour atteindre les objectifs de ventes. Contact avec les 
                            fournisseurs. Formé pour répondre aux besoin des consommateurs dans un secteur conccurentiel. 
                            Elaboration et suivi de stratégies en équipe "débriefing en réunion secteur". Accueil, formation et 
                            évaluation des nouveaux recrutés. Force de proposition en centrale d'achat (nouveautés, services, etc....).
                        </p>
                    </div>
                    <div className="col-md-6">
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="head">
                        De Septembre 2020 à Décembre 2020
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h4>Fewlines à Lille | Bootcamp Dévelopeur Web</h4>
                            <p>
                            <span className="fw-bold">Tâches réalisées :</span> Apprentissage de plusieurs languages tel que HTML, CSS, Bootstrap,
                             JavaScript, NodeJS, React, Redux, React Native et NextJS. Nous avons appris à utiliser Git, Github et comme base de données
                             MongoDB. Nous avons rélisées plusieurs projets durant cette formation qui m'ont permis de réussir ma reconversion Professionnelle
                             et de devenir développeur web junior.
                            </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="head">
                        De Mars 2003 à Septembre 2020
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <h4>Leroy Merlin Villeneuve d'Ascq | Conseiller de vente expert</h4>
                            <p>
                            <span className="fw-bold">Tâches réalisées :</span> Fiabilisation des stocks et du taux de rupture. "commandes, relevés de ruptures, 
                            inventaires,....". Suivi des indicateurs pour atteindre les objectifs de ventes. Contact avec les 
                            fournisseurs. Formé pour répondre aux besoin des consommateurs dans un secteur conccurentiel. 
                            Elaboration et suivi de stratégies en équipe "débriefing en réunion secteur". Accueil, formation et 
                            évaluation des nouveaux recrutés. Force de proposition en centrale d'achat (nouveautés, services, etc....).
                            </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="head">
                            De Février à Juillet 2019
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <h4>M2I Formation à Villeneuve d'Ascq | Développeur Concepteur d'Applications</h4>
                            <p>
                                <span className="fw-bold">Tâches réalisées :</span> Apprentissage de plusieurs languages tel que HTML, CSS, JavaScript,
                                PHP, Symfony, Java et Android Studio. Cette formation m'a permis d'obtenir mon certificat professionnel de Développeur Concepteur
                                d'Applications, de niveau II, équivalent à une licence.
                            </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="head">
                            De Juillet 2019 à Octobre 2019
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <h4>IT Room à Hem | Stage Développeur PHP Symfony </h4>
                            <p>
                                <span className="fw-bold">Tâches réalisées :</span> Développement d'une application permettant la suveillance de l'ensemble 
                                d'un parc applicatif. Maintenance d'application. Développement d'API (ApiPlatform).
                            </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencesPro;
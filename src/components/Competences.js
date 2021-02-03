import '../styles/competences.css';
import html from '../images/html5.png';
import css from '../images/css3.png';
import javascript from '../images/js.png';
import next from '../images/nextjs.png';
import react from '../images/react.png';
import node from '../images/node.png';

// eslint-disable-next-line arrow-body-style
const Competences = () => {
  return (
        <section id="competences">
            <div className="container">
                <h2 className="text-center h2Loisirs">Mes Compétences</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 competences">
                        <h2>Comment je me suis formé ?</h2>
                        <hr/>
                        <p>
                            // eslint-disable-next-line max-len
                            {/* eslint-disable-next-line max-len */}
                            Je suis d'abord et avant tout un passionné ! J'adore apprendre et avant t'intégrer M2I Formations j'ai suivi beaucoup de tutoriel sur internet et me suis formé en autodidacte sur OpenclassNameRoom, Udemy, CodeCademy, H2PROG, etc... J'ai ensuite suivi une formation de Développeur Concepteur d'application et obtenu le certificat professionnel RNCP, niveau II (licence). Enfin j'ai suivi un bootcamp de trois mois chez Fewlines à Lille, qui m'a permis d'intégrer le siège Leroy Merlin en tant sue développeur web.
                        </p>
                    </div>
                    <div className="col-md-6 pt-1">
                        <div className="col text-center">
                            <img src={html} alt="html5" title="html5"/>
                            <img src={css} alt="css3" title="css3"/>
                            <img src={javascript} alt="javascript" title="JavaScript"/>
                        </div>
                        <div className="col text-center">
                            <img src={next} alt="nextJs" title="NextJS"/>
                            <img src={react} alt="react" title="React"/>
                            <img src={node} alt="nodeJS" title="NodeJS"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Competences;

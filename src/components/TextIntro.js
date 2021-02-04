import cv from '../images/cv.pdf';

const TextIntro = () => (
  <div className="text-intro">
    <div className="preTxt font-italic mb-3">Bonjour, moi c'est Jérôme</div>
    <h1>Développeur Web</h1>
    <a href={cv} className="btn btn-dark mt-5" target="_blank" rel="noreferrer">Télécharger mon CV !</a>
  </div>
);

export default TextIntro;

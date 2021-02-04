import github from '../images/github.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import '../styles/footer.css';

const Footer = () => (
  <footer className="text-center p-4">
    <div className="container">
      <div className="col">
        <p>
          Tous Droits Réservés &copy;
          <span id="year" />
          {' '}
          CNOCKAERT Jérôme
        </p>
        <div className="separate" />
        <p>
          <a href="https://github.com/jeje59223"><img src={github} alt="github" /></a>
          <a href="https://twitter.com/Jeje59223"><img src={twitter} alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/jerome-cnockaert-359a20181/"><img src={linkedin} alt="linkedin" /></a>
          <a href="https://www.instagram.com/cnockaert59223/"><img src={instagram} alt="instagram" /></a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

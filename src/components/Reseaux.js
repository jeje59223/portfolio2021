// eslint-disable-next-line no-unused-vars
import React from 'react';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import '../styles/reseaux.css';

const Reseaux = () => (
        <section id="reseaux">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                        <a href="https://www.linkedin.com/in/jerome-cnockaert-359a20181/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <a href="https://www.instagram.com/cnockaert59223/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <a href="https://twitter.com/Jeje59223" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <a href="https://github.com/jeje59223" target="_blank" rel="noreferrer">
                            <img src={github} alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
);

export default Reseaux;

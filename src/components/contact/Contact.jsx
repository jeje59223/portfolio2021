import React from 'react';
import '../../styles/contact.css';

const Contact = () => (
  <section id="contact" className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>Contactez-moi</h3>
          <p className="lead">
            Une interrogation ? Un conseils ? Ou juste envie d'échanger avec moi ? N'hésitez pas à me contacter !
          </p>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="fas fa-user" /></span>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope" /></span>
              <input type="mail" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-pencil-alt" /></span>
              <textarea rows="5" className="form-control" aria-label="With textarea" />
            </div>
            <input type="submit" value="Envoyer" className="btn btn-secondary btn-block btn-lg mt-3" />
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;

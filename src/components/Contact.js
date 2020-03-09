import React from 'react';

import './Contact.css';

function Contact() {
    return (
        <figure className="Contact">
            <img
            className="avatar"
            src="https://randomuser.me/api/portraits/women/59.jpg"
            alt="Rhonda Reed"/>
            <figcaption>
            <p className="name">Rhonda Reed</p>
            <div className="status">
                <p className="status-text"><span className="status-online"></span>online</p>
            </div>
            </figcaption>
        </figure>
    );
  }

  export default Contact;
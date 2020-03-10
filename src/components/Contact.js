import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

function Contact(props) {
    return (
        <figure className="Contact">
            <img
            className="avatar"
            src={props.avatar}
            alt={props.name}/>
            <figcaption>
            <p className="name">{props.name}</p>
            <div className="status">
                <p className="status-text"><span className={props.online ? 'status-online' : 'status-offline'}></span>{props.online ? 'online' : 'offline'}</p>
            </div>
            </figcaption>
        </figure>
    );
  }

  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool,
  };

  export default Contact;
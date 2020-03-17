import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            online: props.status === 'online' ? true : false
        };
    }
    render() {
        return (
            <figure className="Contact">
                <img
                className="avatar"
                src={this.props.avatar}
                alt={this.props.name}/>
                <figcaption>
                <p className="name">{this.props.name}</p>
                <div className="status" onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState({online: newStatus});
                }}>
                    <p className="status-text"><span className={this.state.online ? 'status-online' : 'status-offline'}></span>{this.state.online ? 'online' : 'offline'}</p>
                </div>
                </figcaption>
            </figure>
        );
    }
  }

  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool,
  };

  export default Contact;
import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} alt="" className="avatar"/>
      <div>
      <div className="name">{props.name}</div>
        <div className="status">
            <span class={props.isOnline ? 'status-online' : 'status-offline'}></span><span className="status-text">{props.isOnline ? 'Online' : 'Offline'}</span> 
      </div>
      </div>
    </div>
  );
}



Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired
};

export default Contact;

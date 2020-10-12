import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="" className="avatar"/>
      <div>
      <div className="name">Rene Morrison</div>
        <div className="status">
            <span class="status-online"></span><span className="status-text">Online</span> 
      </div>
      </div>
    </div>
  );
}

export default Contact;

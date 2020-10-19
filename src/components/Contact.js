import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }


 
              


render(){
 return (
    <div className="Contact">
      <img src={this.props.avatar} alt="" className="avatar"/>
      <div>
      <div className="name">{this.props.name}</div>
        <div className="status" onClick={event => {
                const newOnlineStatus = !this.state.online;
                this.setState({ online: newOnlineStatus });
}}>
            <span className={this.state.online ? 'status-online' : 'status-offline'}></span><span className="status-text">{this.state.online ? 'Online' : 'Offline'}</span> 
      </div>
      </div>
    </div>
  );
}
 
}



Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired
};


export default Contact;
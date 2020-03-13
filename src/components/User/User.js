import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faPhoneAlt, faPaperPlane, faMoneyBillAlt, faPlusCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    const {name, username, img, email, address, income, phone} = props.user
    
    function btnHandler(){
        props.friendHandler(props.user) ;
        props.user.btnDisable = true
    } 
    
    return (
        <div className="user">
            <div className="user-img">
                <img  src={img} alt=""/>
            </div>
            <div className="user-container">
                
                <div className="user-info">
                    <div>
                        <h2>{name}</h2>
                        <p><FontAwesomeIcon icon={faUserCircle} /> {username}</p>                        
                        <p><FontAwesomeIcon icon={faMoneyBillAlt} /> ${income}</p>
                        <button className="add-friend-btn" disabled={props.user.btnDisable} onClick={btnHandler}><FontAwesomeIcon icon={faPlusCircle} /> Add Friend</button>
                    </div>
                    <div>
                        <p><small><strong><FontAwesomeIcon icon={faPhoneAlt} /></strong> {phone} <br/><strong><FontAwesomeIcon icon={faPaperPlane} /></strong> {email}</small></p>                     
                        <h5>Address <FontAwesomeIcon icon={faMapMarkedAlt} /></h5>
                        <address>{address.street.number}, {address.street.name}<br/>
                        {address.city},<br/> {address.state}, {address.country}</address>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;
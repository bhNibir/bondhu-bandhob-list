import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faPhoneAlt, faPaperPlane, faMoneyBillAlt, faPlusCircle, faMapMarkedAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    const {name, username, img, email, address, income, phone} = props.user
    const [btnInfo, setBtnInfo] = useState({btnText: "Bondhu Hobo", disable: false, icon: faPlusCircle, btnClass: "add-friend-btn"})
    
    

    function btnHandler(){
        props.friendHandler(props.user) ;
        btnInfo.btnText = "Bondhu" 
        btnInfo.disable = true 
        btnInfo.icon = faUserFriends
        btnInfo.btnClass = "friend-btn"
        
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
                        <button className={btnInfo.btnClass} disabled={btnInfo.disable} onClick={btnHandler}><FontAwesomeIcon icon={btnInfo.icon} /> {btnInfo.btnText}</button>
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
import React, { useState } from 'react';
import './MainBody.css'
import fakeUSER from '../../fakeUSER/user'
import User from '../User/User';
import Friends from '../Friends/Friends';

const MainBody = () => {
    const users = []
    const [userData, setUserData] = useState(users)
    const [friends, setFriend] = useState([]);
    const friendHandler= (user) =>{
        const totalFriend = [...friends, user]
        setFriend(totalFriend)
    }
    

    // Formatted  data
    for (let index = 0; index < fakeUSER.length; index++) {
        const user = fakeUSER[index];
        const formatUser={
            name : user.name.first + " " + user.name.last,
            email : user.email,
            img : user.picture.large ,
            username : user.login.username,
            phone : user.phone,
            address : user.location,
            gender : user.gender,
            income : Math.floor((Math.random() * (1000 - 500) + 500))
        }

        users.push(formatUser)

    }

    return (
        <div className="main-body">
            <div className="all-user">
                {
                    userData.map(user => <User user={user} friendHandler={friendHandler}></User>)
                }
            </div>
            <div className="friends-status">
                <Friends friends={friends}></Friends>
            </div>
        </div>
    );
};

export default MainBody;
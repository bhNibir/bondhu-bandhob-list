import React from 'react';
import './Friend.css'

const Friends = (props) => {
    const friends = props.friends
    const friendIncome = friends.reduce(((total, friend) => Number(total)+Number(friend.income)),0 )
    
    
    
    return (
        <div className="friend-container">
            <h3>Total Friends: {friends.length}</h3>
            <h3>Total Income: {friendIncome}</h3>
            <table>
            {
                friends.map(user => <React.Fragment>
                    <tr>
                        <td><img src={user.img} alt=""/></td>
                        <td>{user.name}</td>
                    </tr>
                </React.Fragment>)
            }
            </table>
        </div>
    );
};

export default Friends;
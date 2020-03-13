import React from 'react';

const Friends = (props) => {
    const friends = props.friends
    const friendIncome = friends.reduce(((total, friend) => Number(total)+Number(friend.income)),0 )
    console.log(friendIncome)
    return (
        <div>
            <h3>Total: {friends.length}</h3>
            <h3>Total Income: {friendIncome}</h3>
        </div>
    );
};

export default Friends;
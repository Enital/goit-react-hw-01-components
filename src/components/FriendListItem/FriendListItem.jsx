import React from "react";
import PropTypes from "prop-types";

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(({avatar,name,isOnline,id}) => {
            return (
                <li className="friend-item" key={id}>
                <span className="friend-status">{ isOnline }</span>
                <img className="friend-avatar" src={ avatar } alt="User avatar" width="48" />
                <p className="friend-name">{ name }</p>
        </li>
            )
        })
    
    )    
}

FriendListItem.prototype = {
    friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
    })
}
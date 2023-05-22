import React from "react";
import PropTypes from "prop-types";
import css from './friendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    const statusColor = (isOnline) ? 'green' : 'red';
    return (
        <li className={css.item} key={id}>
            <span className={css.status} style={{backgroundColor: statusColor}}></span>
            <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
            <p className={css.name}>{ name }</p>
            </li>
    )    
}

FriendListItem.prototype = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
}
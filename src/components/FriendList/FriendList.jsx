import React from 'react';
import PropTypes from "prop-types";
import {FriendListItem} from 'components/FriendListItem/FriendListItem'

import css from './friendList.module.css'

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem key={ id } avatar={avatar} name={name} isOnline={isOnline} id={id} />
            })}
            
        </ul>
    )
}

export default FriendList;

FriendList.prototypes = {
    friends: PropTypes.object,
}
import React from 'react';
import PropTypes from "prop-types";
import {FriendListItem} from 'components/FriendListItem/FriendListItem'

import './friendList.css'

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            <FriendListItem friends={ friends } />
        </ul>
    )
}

export default FriendList;

FriendList.prototypes = {
    friends: PropTypes.object,
}
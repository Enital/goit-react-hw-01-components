import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';


function Profile ({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <div className="stats-ul">
      <ul className="stats">
        <li className="stats-list">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats-list">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats-list">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
        </ul>
        </div>
    </div>
  );
}

export default Profile;

Profile.prototypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
  })
}
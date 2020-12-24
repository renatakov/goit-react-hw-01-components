import React from "react";
import PropTypes from "prop-types";
import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats}) => {
  return(
    <>
  <div className={styles.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="user avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className={styles.followers}>Followers</span>
      <span className={styles.followers}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.views}>Views</span>
      <span className={styles.views}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.likes}>Likes</span>
      <span className={styles.likes}>{stats.likes}</span>
    </li>
  </ul>
</div>
    </>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
import PropTypes from 'prop-types'
import css from 'components/UserCard/User.module.css';

export const User = ({ user: {username, tag, location, avatar, stats:{followers, views, likes} } }) => {
    return (
    <div className={css.profile}>
  <div className={css.description}>
    <img className={css.avatar}
src={avatar}    
  alt="User avatar"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul  className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
);
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.number.isRequired
}
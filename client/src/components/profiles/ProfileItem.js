import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile bg-light" key={_id}>
      <img className="round-img" src={avatar} alt="Faisal" />
      <div>
        <h2>{name}</h2>
        <p>
          {status}{' '}
          {company && (
            <span>
              at{' '}
              <strong>
                <i style={{ color: '#1dbf73' }}>&nbsp;{company}</i>
              </strong>{' '}
            </span>
          )}
        </p>
        <p>{location}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 5).map((skill, index) => {
          return (
            <li key={index} className="text-primary">
              <i cllass="fas fa-check"></i> {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

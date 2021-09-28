import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0 ? (
        experience.map(
          (
            { title, from, to, current, company, location, description },
            index
          ) => {
            return (
              <div key={index}>
                <h3 className="text-dark">{company}</h3>
                <p>
                  <Moment format="YYYY/MM/DD">{from}</Moment> -
                  {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
                </p>
                <p>
                  <strong>Position: </strong>
                  {title}
                </p>
                <p>
                  <strong>Description: </strong>
                  {description}
                </p>
              </div>
            );
          }
        )
      ) : (
        <h4>No Experience Credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;

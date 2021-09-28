import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const ProfileEducation = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>

      {education.length > 0 ? (
        education.map(
          (
            { school, from, to, current, degree, fieldofstudy, description },
            index
          ) => {
            return (
              <div key={index}>
                <div>
                  <h3>{school}</h3>
                  <p>
                    <Moment format="YYYY/MM/DD">{from}</Moment> -
                    {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
                  </p>
                  <p>
                    <strong>Education: </strong>
                    {degree}
                  </p>
                  <p>
                    <strong>Field Of Study: </strong>
                    {fieldofstudy}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {description}
                  </p>
                </div>
              </div>
            );
          }
        )
      ) : (
        <h4>No Education Credentials</h4>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;

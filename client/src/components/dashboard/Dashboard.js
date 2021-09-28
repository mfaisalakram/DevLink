import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// redux
import PropTypes from 'prop-types';
import { getCurrentProfile, ClearProfile } from '../../actions/profile';

import Spinner from '../layouts/Spinner';

import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

import { deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <section className="">
      <h1 className="large text-primary">Dashboard {}</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <div>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
        </div>
      ) : (
        <div>
          <p> You have no Profile Yet</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Your Prfile
          </Link>
        </div>
      )}

      <div className="my-2">
        <button onClick={() => deleteAccount()} className="btn btn-danger">
          <i className="fas fa-user-minus"></i> &nbsp;Delete My Account
        </button>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

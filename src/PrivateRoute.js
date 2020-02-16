import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => {
  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spinner size='lg' color='primary' />
      </div>
    );

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated && !isLoading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);

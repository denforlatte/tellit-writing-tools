import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest,
}) => {
  return (
    <Route
      {...rest}
      render={props => !isAuthenticated ? (
        <Redirect to='/login'/>
      ) : (
        <Component {...props}/>
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute);

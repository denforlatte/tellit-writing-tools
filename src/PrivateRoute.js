import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log('redirect to login?');
        console.log('isAuthenticated :', isAuthenticated);
        console.log('isLoading :', isLoading);
        return !isAuthenticated && !isLoading ? (
        <Redirect to='/login'/>
      ) : (
        <Component {...props}/>
      )}}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading,
})

export default connect(mapStateToProps)(PrivateRoute);

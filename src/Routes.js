import React from 'react'
import PropTypes from 'prop-types'
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import Universes from './views/Universes';

const Routes = props => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Universes} />
      <Route exact path='/login' component={Login} />
    </Switch>
  )
}

Routes.propTypes = {

}

export default Routes

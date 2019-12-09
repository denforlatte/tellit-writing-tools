import React from 'react'
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

export default Routes

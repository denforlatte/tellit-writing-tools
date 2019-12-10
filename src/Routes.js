import React from 'react'
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import Universes from './views/Universes';
import Universe from './views/Universe';
import Characters from './views/Characters';
import Character from './views/Character';

const Routes = props => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Universes} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/u/:universeId' component={Universe} />
      <PrivateRoute exact path='/u/:universeId/c/' component={Characters} />
      <PrivateRoute exact path='/u/:universeId/c/:characterId' component={Character} />
    </Switch>
  )
}

export default Routes

import React from 'react'
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Universes from './pages/Universes';
import Universe from './pages/Universe';
import Characters from './pages/CharactersPage/CharactersPage';
import Character from './pages/CharacterPage/CharacterPage';

const Routes = props => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Universes} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/u/:universeId/c/:characterId' component={Character} />
      <PrivateRoute exact path='/u/:universeId/c' component={Characters} />
      <PrivateRoute exact path='/u/:universeId' component={Universe} />
    </Switch>
  )
}

export default Routes

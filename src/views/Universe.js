import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import { selectUniverse } from '../actions/universeActions';
import { Link } from 'react-router-dom';

const Universe = ({universe, match, selectUniverse}) => {
  // TODO This doesn't work. Just fetch it. :/
  if (!universe || universe.id !== match.params.universeId) {
    console.log('Set correct universe');
    selectUniverse(match.params.universeId);
    // TODO Bug fix: breaks if universe is not in store
  }

  return (
    <div>
      <h2>{universe.name}</h2>
      <Link to={`${match.url}/c`}>Characters</Link>
    </div>
  )
}

Universe.propTypes = {
  universe: PropTypes.any,
  match: PropTypes.object.isRequired,
  selectUniverse: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  universe: state.universes.selectedUniverse,
})

export default connect(mapStateToProps, { selectUniverse })(Universe);

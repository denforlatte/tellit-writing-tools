import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import { selectUniverse } from '../actions/universeActions';

const Universe = ({universe, match, selectUniverse}) => {
  // TODO Check store for this universe
  if (!universe || universe.id !== match.params.universeId) {
    console.log('Set correct universe');
    selectUniverse(match.params.universeId);
    // TODO Bug fix: breaks if universe is not in store
  }

  return (
    <div>
      {universe.name}
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

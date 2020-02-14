import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import { getUniverse } from '../actions/universeActions';
import { Link } from 'react-router-dom';

const Universe = ({universe, match, getUniverse}) => {
  useEffect(() => {
    getUniverse(match.params.universeId)
  }, [getUniverse]);

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
  getUniverse: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  universe: state.universes.universe,
})

export default connect(mapStateToProps, { getUniverse })(Universe);

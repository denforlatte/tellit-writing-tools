import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUniverse } from '../actions/universeActions';
import { Link } from 'react-router-dom';

import MainMenu from '../components/MainMenu/MainMenu';

const Universe = ({ isLoading, universe, match, getUniverse }) => {
  useEffect(() => {
    getUniverse(match.params.universeId);
  }, [getUniverse, match]);

  // TODO loading state
  if (!universe) return null;
  return (
    <>
      <MainMenu editable/>
      <main>
        <div>
          <h2>{universe.name}</h2>
          <Link to={`${match.url}/c`}>Characters</Link>
        </div>
      </main>
    </>
  );
};

Universe.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  universe: PropTypes.any,
  match: PropTypes.object.isRequired,
  getUniverse: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.universes.isLoading,
  universe: state.universes.universe,
});

export default connect(mapStateToProps, { getUniverse })(Universe);

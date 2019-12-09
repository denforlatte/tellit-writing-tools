import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';

import {getUniverses} from '../actions/universeActions';

import Universe from '../components/Universe';

const Universes = ({getUniverses, universes}) => {
  // TODO only fetch if universes are not in state
  if (!universes) {
    getUniverses();
  }

  return (
    <Container>
      <br/>
      <Row>
        <Col>
          {universes && universes.map(universe => (
            <Universe key={universe._id} universe={universe} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

Universes.propTypes = {
  universes: PropTypes.array,
};

const mapStateToProps = state => ({
  universes: state.universes.universes,
})

export default connect(mapStateToProps, {getUniverses})(Universes);

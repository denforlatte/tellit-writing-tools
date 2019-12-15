import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Col, Row, Card, CardTitle } from 'reactstrap';

import { getUniverses, createUniverse } from '../actions/universeActions';

import Universe from '../components/Universe';

const Universes = ({ getUniverses, createUniverse, universes }) => {
  useEffect(() => {
    getUniverses();
  }, [getUniverses])

  return (
    <Container>
      <br />
      {universes && universes.length > 0 &&
        universes.map(universe => (
          <Row key={universe._id}>
            <Col>
              <Universe universe={universe} />
            </Col>
          </Row>
        ))}
      <Row>
        <Col>
          <Card
            body
            inverse
            color='primary'
            onClick={() => createUniverse({name: 'My New Universe'})}>
            <CardTitle>Create new Universe...</CardTitle>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Universes.propTypes = {
  universes: PropTypes.array,
  getUniverses: PropTypes.func.isRequired,
  createUniverse: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  universes: state.universes.universes,
});

export default connect(mapStateToProps, { getUniverses, createUniverse })(
  Universes
);

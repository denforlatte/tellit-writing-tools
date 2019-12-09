import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'reactstrap';
import { universeCard } from './universe.module.scss';

const Universe = ({ universe }) => {
  return (
    <Link to={`/${'universe'}`}>
      <Card body inverse color='primary' className={universeCard}>
        <CardTitle>{universe.name}</CardTitle>
        <CardText>{universe.description}</CardText>
        <CardText>
          <small>Last opened {moment(universe.lastOpened).fromNow()}</small>
        </CardText>
      </Card>
    </Link>
  );
};

Universe.propTypes = {
  universe: PropTypes.object.isRequired,
};

export default Universe;

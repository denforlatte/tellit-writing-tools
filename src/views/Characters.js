import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, ListGroup, ListGroupItem } from 'reactstrap';

import { getCharacters } from '../actions/characterActions';

const Characters = ({
  characters: { isLoading, majorCharacters, minorCharacters, selectedCharacter },
  getCharacters,
  user,
  match,
}) => {
  useEffect(() => {
    if (user.isAuthenticated) {
      getCharacters(match.params.universeId);
    }
  }, [user]);

  if (selectedCharacter) {
    return <Redirect to={`${match.url}/${selectedCharacter._id}`} />
  }

  return (
    <Container>
      <h2>Major Characters</h2>
      <ListGroup>
        {majorCharacters &&
          majorCharacters.map(character => (
            <ListGroupItem onClick={() => alert('hi')} style={{cursor: 'pointer'}}>
              {character.name}
            </ListGroupItem>
          ))}
      </ListGroup>
      <br />
      <h2>Minor Characters</h2>
      <ListGroup>
        {minorCharacters &&
          minorCharacters.map(character => (
            <ListGroupItem onClick={() => alert('hi')} style={{cursor: 'pointer'}}>{character.name}
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
};

Characters.propTypes = {};

const mapStateToProps = state => ({
  characters: state.characters,
  user: state.user,
});

export default connect(mapStateToProps, { getCharacters })(Characters);

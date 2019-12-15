import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Spinner, ListGroup, ListGroupItem } from 'reactstrap';

import { getCharacters, selectCharacter, addNewCharacter } from '../actions/characterActions';

const Characters = ({
  characters: { isLoading, majorCharacters, minorCharacters, selectedCharacter },
  getCharacters,
  selectCharacter,
  addNewCharacter,
  user,
  match,
}) => {
  useEffect(() => {
    if (user.isAuthenticated) {
      getCharacters(match.params.universeId);
    }
  }, [user, match.params.universeId, getCharacters]);

  if (selectedCharacter) {
    return <Redirect to={`${match.url}/${selectedCharacter._id}`} />
  }

  return (
    <Container>
      <h2>Major Characters</h2>
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Spinner size='lg' color='primary'/>
            </div>
          ) : (
            <ListGroup>
              {majorCharacters &&
                majorCharacters.map(character => (
                  <ListGroupItem key={character._id} onClick={() => selectCharacter(character._id)} style={{cursor: 'pointer'}}>
                    {character.name}
                  </ListGroupItem>
                ))}
                <ListGroupItem onClick={() => addNewCharacter({name: 'New Character', importance: 'major', universeId: match.params.universeId})} style={{cursor: 'pointer'}}>Add new major character...</ListGroupItem>
            </ListGroup>
          )}
      <br />
      <h2>Minor Characters</h2>
      
      {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Spinner size='lg' color='primary'/>
            </div>
          ) : (
            <ListGroup>
              {minorCharacters &&
                minorCharacters.map(character => (
                  <ListGroupItem key={character._id} onClick={() => selectCharacter(character._id)} style={{cursor: 'pointer'}}>{character.name}
                  </ListGroupItem>
                ))}
                <ListGroupItem onClick={() => addNewCharacter({name: 'New Character', importance: 'minor', universeId: match.params.universeId})} style={{cursor: 'pointer'}}>Add new minor character...</ListGroupItem>
            </ListGroup>
          )}
    </Container>
  );
};

Characters.propTypes = {
  characters: PropTypes.object.isRequired,
  getCharacters: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  addNewCharacter: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
  user: state.user,
});

const mapDispatchToProps = {
  getCharacters,
  selectCharacter,
  addNewCharacter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);

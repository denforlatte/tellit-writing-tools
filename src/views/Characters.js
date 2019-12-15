import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Spinner, ListGroup, ListGroupItem } from 'reactstrap';

import { getCharacters, selectCharacter } from '../actions/characterActions';

const Characters = ({
  characters: { isLoading, majorCharacters, minorCharacters, selectedCharacter },
  getCharacters,
  selectCharacter,
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
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Spinner size='lg' color='primary'/>
            </div>
          ) : (
            <ListGroup>
              {majorCharacters &&
                majorCharacters.map(character => (
                  <ListGroupItem onClick={() => selectCharacter(character._id)} style={{cursor: 'pointer'}}>
                    {character.name}
                  </ListGroupItem>
                ))}
                <ListGroupItem onClick={() => alert()} style={{cursor: 'pointer'}}>Add new major character...</ListGroupItem>
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
                  <ListGroupItem onClick={() => selectCharacter(character._id)} style={{cursor: 'pointer'}}>{character.name}
                  </ListGroupItem>
                ))}
                <ListGroupItem onClick={() => alert('hi')} style={{cursor: 'pointer'}}>Add new minor character...</ListGroupItem>
            </ListGroup>
          )}
    </Container>
  );
};

Characters.propTypes = {
  characters: PropTypes.object.isRequired,
  getCharacters: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
  user: state.user,
});

export default connect(mapStateToProps, { getCharacters, selectCharacter })(Characters);

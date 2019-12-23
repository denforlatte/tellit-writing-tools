import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Spinner,
  ListGroup,
  ListGroupItem,
  Input,
  Button,
} from 'reactstrap';

import { characterLink } from './characters.module.scss';

import {
  getCharacters,
  addNewCharacter,
} from '../../actions/characterActions';

export const Characters = ({
  characters: {
    isLoading,
    majorCharacters,
    minorCharacters,
  },
  getCharacters,
  addNewCharacter,
  user,
  match,
}) => {
  const [isAddingMajorCharacter, setIsAddingMajorCharacter] = useState(false);
  const [isAddingMinorCharacter, setIsAddingMinorCharacter] = useState(false);
  const [newCharacter, setNewCharacter] = useState({});

  useEffect(() => {
    if (user.isAuthenticated) {
      getCharacters(match.params.universeId);
    }
  }, [user, match.params.universeId, getCharacters]);

  const updateNewCharacterOnChange = e => {
    setNewCharacter({
      ...newCharacter,
      name: e.target.value,
      importance: e.target.name,
    });
  };

  const addCharacterOnSubmit = () => {
    addNewCharacter({
      ...newCharacter,
      universeId: match.params.universeId,
    });
    setIsAddingMajorCharacter(false);
    setIsAddingMinorCharacter(false);
  };

  return (
    <Container>
      <h2>Major Characters</h2>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner size='lg' color='primary' />
        </div>
      ) : (
        <ListGroup>
          {majorCharacters.map(character => (
            <ListGroupItem
              key={character._id}
              className={characterLink}
              tag='a'
              href={`${match.url}/${character._id}`}>
              {character.name}
            </ListGroupItem>
          ))}
          {isAddingMajorCharacter ? (
            <ListGroupItem>
              <div style={{ display: 'flex' }}>
                <Input
                  type='text'
                  name='major'
                  id='majorCharacterName'
                  placeholder='Add a name'
                  onChange={e => updateNewCharacterOnChange(e)}
                />
                <Button color='primary' onClick={() => addCharacterOnSubmit()}>
                  Add
                </Button>
                <Button onClick={() => setIsAddingMajorCharacter(false)}>
                  Cancel
                </Button>
              </div>
            </ListGroupItem>
          ) : (
            <ListGroupItem
              onClick={() => setIsAddingMajorCharacter(true)}
              style={{ cursor: 'pointer' }}>
              Add new major character...
            </ListGroupItem>
          )}
        </ListGroup>
      )}
      <br />
      <h2>Minor Characters</h2>

      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner size='lg' color='primary' />
        </div>
      ) : (
        <ListGroup>
          {minorCharacters.map(character => (
            <ListGroupItem
            key={character._id}
            className={characterLink}
            tag='a'
            href={`${match.url}/${character._id}`}>
            {character.name}
          </ListGroupItem>
          ))}
          {isAddingMinorCharacter ? (
            <ListGroupItem>
              <div style={{ display: 'flex' }}>
                <Input
                  type='text'
                  name='minor'
                  id='minorCharacterName'
                  placeholder='Add a name'
                  onChange={e => updateNewCharacterOnChange(e)}
                />
                <Button color='primary' onClick={() => addCharacterOnSubmit()}>
                  Add
                </Button>
                <Button onClick={() => setIsAddingMinorCharacter(false)}>
                  Cancel
                </Button>
              </div>
            </ListGroupItem>
          ) : (
            <ListGroupItem
              onClick={() => setIsAddingMinorCharacter(true)}
              style={{ cursor: 'pointer' }}>
              Add new minor character...
            </ListGroupItem>
          )}
        </ListGroup>
      )}
      <br />
      <br />
      <br />
    </Container>
  );
};

Characters.propTypes = {
  characters: PropTypes.object.isRequired,
  getCharacters: PropTypes.func.isRequired,
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
  addNewCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);

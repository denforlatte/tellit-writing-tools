import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCharacter, updateCharacter } from '../../actions/characterActions';

import MainMenu from '../../components/MainMenu/MainMenu';
import SubMenu from '../../components/SubMenu/SubMenu';
import SubMenuItem from '../../components/SubMenu/SubMenuItem';

// Character tabs
import Overview from '../../components/characterTabs/Overview';
import { Spinner } from 'reactstrap';

const iconStyle = {
  fontSize: '40px',
};

const CharacterPage = ({ isLoading, character, getCharacter, updateCharacter, match }) => {
  const [tab, setTab] = useState('overview');

  const { characterId, universeId } = match.params;
  useEffect(() => {
    getCharacter(characterId, universeId);
  }, [getCharacter, characterId, universeId]);

  useEffect(() => {
    // TODO trigger a save on close
    // return () => alert('hi!');
  }, []);

  // TODO add character state and function to save
  // This might be pointless. It needs to be a redux action.
  const updateCharacterData = e => updateCharacter(universeId, {...character, [e.target.name]: e.target.value});

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spinner size="lg" color="primary" />
      </div>
    );

  const getSelectedTab = () => {
    switch (tab) {
      case 'overview':
        return <Overview character={character} updateCharacterData={updateCharacterData}/>;
      case 'physical':
        return <div>physical</div>;
      case 'mental':
        return <div>mental</div>;
      case 'communication':
        return <div>communication</div>;
      case 'questions':
        return <div>questions</div>;
      default:
        return <div>No tab selected</div>;
    }
  };

  const currentTab = getSelectedTab();

  return (
    <>
      <MainMenu editable />
      <main>
        <div>
          Character
          {currentTab}
          <SubMenu>
            <SubMenuItem onClick={() => setTab('overview')}>
              <i className="fas fa-user" style={iconStyle}></i>
            </SubMenuItem>
            <SubMenuItem onClick={() => setTab('physical')}>
              <i className="fas fa-eye" style={iconStyle}></i>
            </SubMenuItem>
            <SubMenuItem onClick={() => setTab('mental')}>
              <i className="fas fa-brain" style={iconStyle}></i>
            </SubMenuItem>
            <SubMenuItem onClick={() => setTab('communication')}>
              <i className="fas fa-comment" style={iconStyle}></i>
            </SubMenuItem>
            <SubMenuItem onClick={() => setTab('questions')}>
              <i className="fas fa-question-circle" style={iconStyle}></i>
            </SubMenuItem>
          </SubMenu>
        </div>
      </main>
    </>
  );
};

CharacterPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  character: PropTypes.object,
  getCharacter: PropTypes.func.isRequired,
  updateCharacter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.characters.isLoading,
  character: state.characters.selectedCharacter,
});

export default connect(mapStateToProps, { getCharacter, updateCharacter })(CharacterPage);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCharacter } from '../../actions/characterActions';

import SubMenu from '../../components/SubMenu/SubMenu';
import SubMenuItem from '../../components/SubMenu/SubMenuItem';

// Character tabs
import Overview from '../../components/characterTabs/Overview';

const iconStyle = {
  fontSize: '40px',
};

const Character = ({character, getCharacter, match}) => {
  const [tab, setTab] = useState('overview');

  const { characterId, universeId } = match.params;
  useEffect(() => {
    getCharacter(characterId, universeId);
  }, [getCharacter, characterId, universeId])
  
  
  // TODO add loading/error state

  const getSelectedTab = () => {
    switch (tab) {
      case 'overview':
        return <Overview character={character}/>;
      case 'physical':
        return <div>physical</div>;
      case 'mental':
        return <div>mental</div>;
      case 'communication':
        return <div>communication</div>;
      case 'questions':
        return <div>questions</div>;
      default:
        return <div>No tab selected</div>
    }
  };

  const currentTab = getSelectedTab();

  return (
    <div>
      Character
      {currentTab}
      <SubMenu>
        <SubMenuItem onClick={() => setTab('overview')}>
          <i className='fas fa-user' style={iconStyle}></i>
        </SubMenuItem>
        <SubMenuItem onClick={() => setTab('physical')}>
          <i className='fas fa-eye' style={iconStyle}></i>
        </SubMenuItem>
        <SubMenuItem onClick={() => setTab('mental')}>
          <i className='fas fa-brain' style={iconStyle}></i>
        </SubMenuItem>
        <SubMenuItem onClick={() => setTab('communication')}>
          <i className='fas fa-comment' style={iconStyle}></i>
        </SubMenuItem>
        <SubMenuItem onClick={() => setTab('questions')}>
          <i className='fas fa-question-circle' style={iconStyle}></i>
        </SubMenuItem>
      </SubMenu>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object,
  getCharacter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  character: state.characters.selectedCharacter,
})

export default connect(mapStateToProps, {getCharacter})(Character);

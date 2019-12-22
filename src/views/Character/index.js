import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SubMenu from '../../components/SubMenu/SubMenu';
import SubMenuItem from '../../components/SubMenu/SubMenuItem';

// Character tabs
import Overview from '../../components/characterTabs/Overview';

const iconStyle = {
  fontSize: '40px',
};

const Character = props => {
  const [tab, setTab] = useState('overview');

  const getSelectedTab = () => {
    switch (tab) {
      case 'overview':
        return <Overview />;
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

Character.propTypes = {};

export default Character;

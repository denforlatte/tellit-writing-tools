import React from 'react'
import PropTypes from 'prop-types'

import SubMenu from '../../components/SubMenu/SubMenu';
import SubMenuItem from '../../components/SubMenu/SubMenuItem';

const Character = props => {
  return (
    <div>
      Character
      <SubMenu>
        <SubMenuItem><i className="fas fa-user"></i></SubMenuItem>
        <SubMenuItem><i className="fas fa-user"></i></SubMenuItem>
        <SubMenuItem><i className="fas fa-user"></i></SubMenuItem>
        <SubMenuItem><i className="fas fa-user"></i></SubMenuItem>
        <SubMenuItem><i className="fas fa-user"></i></SubMenuItem>
      </SubMenu>
    </div>
  )
}

Character.propTypes = {

}

export default Character

import React from 'react'
import PropTypes from 'prop-types'
import {nav, navItemContainer} from './subMenu.module.scss'

const SubMenu = ({children}) => {
  return (
    <nav className={nav}>
      <div className={navItemContainer}>
        {children}
      </div>
    </nav>
  )
}

SubMenu.propTypes = {
  children: PropTypes.any,
}

export default SubMenu

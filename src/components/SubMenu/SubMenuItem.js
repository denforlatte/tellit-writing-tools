import React from 'react'
import PropTypes from 'prop-types'
import { navItem } from './subMenu.module.scss'

const SubMenuItem = ({children, onClick}) => {
  return (
    <div className={navItem} onClick={onClick}>
      {children}
    </div>
  )
}

SubMenuItem.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
}

export default SubMenuItem

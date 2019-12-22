import React from 'react'
import PropTypes from 'prop-types'
import { li } from './subMenu.module.scss'

const SubMenuItem = ({children}) => {
  return (
    <div className={li}>
      {children}
    </div>
  )
}

SubMenuItem.propTypes = {

}

export default SubMenuItem

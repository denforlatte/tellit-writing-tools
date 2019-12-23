import React from 'react'
import PropTypes from 'prop-types'

import EditableText from '../common/EditableText';

const Overview = props => {
  return (
    <div>
      Character Overview
    </div>
  )
}

Overview.propTypes = {
  character: PropTypes.object.isRequired,
}

export default Overview

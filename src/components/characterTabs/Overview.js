import React from 'react'
import PropTypes from 'prop-types'

import KeyValueText from '../common/KeyValueText';

const Overview = props => {
  return (
    <div>
      Character Overview
      <KeyValueText entryName={"Test name"} value={"blah blah blah"} onChange={(x) => console.log(x)} />
    </div>
  )
}

Overview.propTypes = {
  character: PropTypes.object.isRequired,
}

export default Overview

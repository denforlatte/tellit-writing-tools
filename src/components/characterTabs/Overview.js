import React from 'react'
import PropTypes from 'prop-types'

import KeyValueText from '../common/KeyValueText';

const Overview = ({character, updateCharacterData}) => {
  return (
    <div>
      Character Overview
      <KeyValueText entryName={"importance"} value={character.importance} saveValue={updateCharacterData} />
    </div>
  )
}

Overview.propTypes = {
  character: PropTypes.object.isRequired,
  updateCharacterData: PropTypes.func.isRequired,
}

export default Overview

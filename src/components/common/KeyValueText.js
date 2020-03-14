import React from 'react'
import PropTypes from 'prop-types'

import EditableText from './EditableText';

const KeyValueText = ({entryName, value, saveValue}) => {
  return (
    <div>
      {entryName}
      <EditableText entryName={entryName} text={value} saveValue={saveValue}/>
    </div>
  )
}

KeyValueText.propTypes = {
  entryName: PropTypes.string.isRequired,
  value: PropTypes.string,
  saveValue: PropTypes.func.isRequired,
}

export default KeyValueText

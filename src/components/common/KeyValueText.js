import React from 'react'
import PropTypes from 'prop-types'

import EditableText from './EditableText';

const KeyValueText = ({entryName, value, onChange}) => {
  return (
    <div>
      {entryName}
      <EditableText entryName={entryName} text={value} onChange={onChange}/>
    </div>
  )
}

KeyValueText.propTypes = {
  entryName: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default KeyValueText

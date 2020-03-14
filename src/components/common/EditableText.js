import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const EditableText = ({ entryName, text, saveValue, lineCount = 1 }) => {
  const [isEditing, setIsEditing] = useState(false)
  const lineHeight = 1.5; // Sorry future Danny. I couldn't think of a better way.
  const inputHeight = 1 + lineCount * lineHeight + 'rem';

  // TODO add onBlur handler function

  if (!isEditing) {
    // TODO Remove on click
    return <p onClick={() => setIsEditing(true)}>{text}</p>;
  } else {
    // TODO make onBlur save and not end editing.
    return (
      <Input
        onBlur={() => setIsEditing(false)}
        type={lineCount > 1 ? 'textarea' : 'text'}
        style={{height: inputHeight}}
        name={entryName}
        placeholder={text}
        onBlur={e => saveValue(e)}
      />
    );
  }
};

EditableText.propTypes = {
  entryName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  saveValue: PropTypes.func.isRequired,
  lineCount: PropTypes.number,
};

export default EditableText;

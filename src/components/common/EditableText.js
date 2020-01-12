import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const EditableText = ({ entryName, text, onChange, lineCount = 1 }) => {
  const [isEditing, setIsEditing] = useState(false)
  const lineHeight = 1.5; // Sorry future Danny. I couldn't think of a better way.
  const inputHeight = 1 + lineCount * lineHeight + 'rem';

  if (!isEditing) {
    return <p onClick={() => setIsEditing(true)}>{text}</p>;
  } else {
    return (
      <Input
        onBlur={() => setIsEditing(false)}
        type={lineCount > 1 ? 'textarea' : 'text'}
        style={{height: inputHeight}}
        name={entryName}
        placeholder={text}
        onChange={e => onChange(e)}
      />
    );
  }
};

EditableText.propTypes = {
  entryName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  lineCount: PropTypes.number,
};

export default EditableText;

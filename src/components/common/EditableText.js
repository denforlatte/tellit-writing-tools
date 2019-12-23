import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const EditableText = ({ text, isEditing, name, onChange }) => {
  if (!isEditing) {
    return <p>{text}</p>;
  } else {
    return <Input name={name} placeholder={text} onChange={e => onChange(e)} />;
  }
};

EditableText.propTypes = {
  text: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditableText;

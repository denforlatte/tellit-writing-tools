import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { logInUser } from '../../actions/userActions';

const LoginForm = ({ logInUser }) => {
  const [formData, setFormData] = useState({});

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => logInUser(formData);

  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Email</Label>
        <Input type='email' name='email' id='email' placeholder='example@email.com' onChange={e => handleChange(e)} />
      </FormGroup>
      <FormGroup>
        <Label for='examplePassword'>Password</Label>
        <Input type='password' name='password' id='password' placeholder='******' onChange={e => handleChange(e)} />
      </FormGroup>
      <Button color='primary' onClick={() => handleSubmit()}>
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { logInUser })(LoginForm);

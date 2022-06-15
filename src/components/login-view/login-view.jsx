import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {RegistrationView} from '../registration-view/registration-view';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username); 
  }

  //this section of code may need to be revisited at section 3.6 - Client Side App Routing in order to have a functional way of getting to the registration page
  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegistered(true);
    console.log('Registration...');
  }

  return (
    <div>
      <Form>
        <Form.Group controlId='formUsername'> 
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Button type="button" onClick={handleRegister}> 
        Register
      </Button>
    </div>
  )

}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
      <form>
        <label>
          Username: 
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <button type="button" onClick={handleRegister}>Register</button>
    </div>
  )

}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';

import {RegistrationView} from '../registration-view/registration-view';
import './login-view.scss';

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
    <Container className="login-view">
      <Row>
        <Col md={5}>
          <CardGroup>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Login Here</Card.Title>
                <Form>
                  <Form.Group controlId='formUsername'> 
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleSubmit} className="submit-button">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Button type="button" onClick={handleRegister} className="register-button">
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  )

  // return (
  //   <div className="login-view">
  //     <Col md={4}>
  //       <Form>
  //         <Form.Group controlId='formUsername'> 
  //           <Form.Label>Username: </Form.Label>
  //           <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
  //         </Form.Group>

  //         <Form.Group controlId='formPassword'>
  //           <Form.Label>Password: </Form.Label>
  //           <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
  //         </Form.Group>
  //         <Button variant="primary" type="submit" onClick={handleSubmit} className="submit-button">
  //           Submit
  //         </Button>
  //       </Form>
  //     </Col>
  //     <Col md={4}>
  //       <Button type="button" onClick={handleRegister} className="register-button"> 
  //         Register
  //       </Button>
  //     </Col>
  //   </div>
  // )

}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
};

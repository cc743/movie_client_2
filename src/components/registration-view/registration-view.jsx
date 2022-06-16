import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Form from 'react-bootstrap/Form';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const submitRegistration = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    /* send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onRegistered(null);
    props.onLoggedIn(username); 
  }

  return (
    <Container className="registration-view">
      <Row>
        <Col md={5}>
          <CardGroup>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Register Here</Card.Title>
                <Form> 
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
                  </Form.Group>

                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>

                  <Form.Group controlId='formBirthday'>
                    <Form.Label>Birthday: </Form.Label>
                    <Form.Control type="date" onChange={e => setBirthday(e.target.value)}/>
                  </Form.Group>

                  <Button type="submit" onClick={submitRegistration} className="submit-button">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )

}

RegistrationView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date)
  }),
  onRegister: PropTypes.func
};

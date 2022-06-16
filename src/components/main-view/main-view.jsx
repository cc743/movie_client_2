import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import {RegistrationView} from '../registration-view/registration-view';
import {LoginView} from '../login-view/login-view';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';
import './main-view.scss';

class MainView extends React.Component {  //according to video, uses generic React Component template.  Note: In javaScript, classes are a template for creating objects

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null, 
      user: null, 
      regDesire: null,
    };
  } 

  componentDidMount(){
    axios.get('https://evening-ridge-21612.herokuapp.com/movies/') 
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistered(bool) {
    this.setState({
      regDesire: bool,
    });
  }

  render() {
    const {movies, selectedMovie, user, regDesire} = this.state;

    if (regDesire) {
      return <RegistrationView onLoggedIn={user => this.onLoggedIn(user)} onRegistered={regDesire => this.onRegistered(regDesire)}/>
    }

    if (!user) { 
      return (
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegistered={regDesire => this.onRegistered(regDesire)}/> 
    )}

    if (movies.length === 0) return <div className="main-view" />;
     
    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
          ? (
            <Col xs={6} md={6}>
              <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>
            </Col>
          )
          : (
            movies.map(movie => (
              <Col xs={6} sm={3} md={3}> 
                <MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => {this.setSelectedMovie(newSelectedMovie)}} /> 
              </Col>
            ))
          )
        }
      </Row>
    );
  }
}

export default MainView;

MainView.propTypes = {
  movieData: PropTypes.arrayOf({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired, 
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: {
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired
    },
    ImagePath: PropTypes.string
  }),
  user: PropTypes.string
};

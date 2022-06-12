import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import {RegistrationView} from '../registration-view/registration-view';
import {LoginView} from '../login-view/login-view';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

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

    if (!user) { 
      return (
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegistered={regDesire => this.onRegistered(regDesire)}/> 
    )}

    if (regDesire) {
      return <RegistrationView />
    }

    if (movies.length === 0) return <div className="main-view" />;
     
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => {this.setSelectedMovie(movie)}} />
          ))
        }
      </div>
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

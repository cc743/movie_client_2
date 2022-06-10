import React from 'react';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

class MainView extends React.Component {  //according to video, uses generic React Component template.  Note: In javaScript, classes are a template for creating objects

  constructor(){
    super();
    this.state = {
      movies: [
        {_id: 1, Title: "Inception", Description: "A group traverses dreams in search of clues", ImagePath: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"}, 
        {_id: 2, Title: "The Shawshank Redemption", Description: "A film which takes place in a prison", ImagePath: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"},
        {_id: 3, Title: "Gladiator", Description: "An ancient Roman gladiator chooses to fight", ImagePath: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Queen_Elizabeth_II_in_March_2015.jpg"}
      ],
      selectedMovie: null
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const {movies, selectedMovie} = this.state;

    // if (selectedMovie) return <MovieView movieData={selectedMovie} />

    if (movies.length === 0) return <div className="main-view">The list is empty</div>;
     
    return (
      <div className="main-view">
        {/* {movies.map(movie => <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => {this.setSelectedMovie(movie)}} />)} */}
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

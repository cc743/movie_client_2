import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col} from 'react-bootstrap'; 
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const {movieData, onMovieClick} = this.props;
    // return <div className="movie-card" onClick={() => {onMovieClick(movieData); }}>{movieData.Title}</div>; 
    return (
      <Card border="primary" className="movie-card"> 
        <Col md={11} className="card-poster">
          <Card.Img variant="top" crossOrigin='anonymous' src={movieData.ImagePath}/> 
        </Col>
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movieData)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired, 
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

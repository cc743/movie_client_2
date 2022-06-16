import React from 'react';
import PropTypes from 'prop-types'; 
import {Button, Card, Row, Col} from 'react-bootstrap'; 
import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const {movieData, onBackClick} = this.props;

    return (
      <Card border="primary" className="movie-card"> 
        <Col md={6} className="movie-poster">
          <Card.Img variant="top" crossOrigin='anonymous' src={movieData.ImagePath} /> 
        </Col>
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>Description: {movieData.Description}</Card.Text>
          <Card.Text>Director: {movieData.Director.Name}</Card.Text>
          <Card.Text>Genre: {movieData.Genre.Name}</Card.Text>
          <Button onClick={() => {onBackClick(null)}} variant="link">Back</Button>
        </Card.Body>
      </Card>
    );
  }

}

MovieView.propTypes = {
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
  onBackClick: PropTypes.func.isRequired
};

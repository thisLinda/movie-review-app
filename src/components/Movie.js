// a component that represents movie data (i.e. image, synopsis, rating, etc… [note: imported from movielist])

import React from 'react';
import { Card } from 'react-bootstrap';
import ReviewList from './ReviewList';
import Stars from './Stars';

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      ratingImage: props.ratingImage,
      summary: props.summary,
      image: props.image
    };
  }

  render() {
    return (
      <Card style={{ width: '28rem' }}>
        <Card.Header>{this.state.title}</Card.Header>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <div className="cardBody">
            {this.state.summary}
            <br />
            {this.state.ratingImage}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Stars />
          <ReviewList />
        </Card.Footer>
      </Card>
    )
	}
}
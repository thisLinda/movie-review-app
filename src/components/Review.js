// A text review a user can leave on a movie
import React from 'react'
import ReviewForm from './ReviewForm';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.userReview = props.userReview;
    this.key = props.key;
  }

  render() {
    return (
      <Card>
        <Card.Body><em>{this.userReview}></em></Card.Body>
      </Card>
    )
  }
}
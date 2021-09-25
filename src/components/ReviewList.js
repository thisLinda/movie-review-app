// a container inside of a Movie that houses Review components

import React from 'react'
import ReviewForm from './ReviewForm';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {reviews: new Array()};
  }

  onFormSubmit(formState) {
    const reviews = this.state.reviews.slice();
    reviews.push(formState);
    this.setState ({
      reviews
    })
  }

  render() {
    return (
      <div className='container'>
        {this.state.reviews.map(function(review, index) {
          return <div key={index}> {review.reviewInfo}></div>
        })}
        <ReviewForm onSubmit={(formState) => this.onFormSubmit(formState)} />
      </div>
    )
  }
}
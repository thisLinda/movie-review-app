// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment

// todo: functioning change state, review pushed to array

import React from 'react';
import {Button, Form} from 'react-bootstrap';

export default class ReviewForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        userReview: '',
      }
      // this.id = props.id;
      // this.userReview = props.userReview;
      // this.updateReviewState = props.updateReviewState;
      // todo: update functions to arrow functions, don't need to bind
      this.submitReview = this.submitReview.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  resetReview() {
    this.setState({
      userReview: '',
    });
  }

  submitReview() {
    this.props.onFormSubmit(this.state);
    this.resetReview();
  }

  // I think this should be onChange, parent gets handleChange
  handleChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form className="reviewForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" id="userReview" placeholder='Add Your Review Here' rows={3} value={this.userReview}/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" active size="lg" onClick={this.submitReview}>Save Review</Button>
        </div>
        <input type='hidden' name='movieId' id='movieId' value={this.id}/>
        <input type='hidden' id='showMovieId' placeholder={this.id}/>
      </Form>
    )
  }
}
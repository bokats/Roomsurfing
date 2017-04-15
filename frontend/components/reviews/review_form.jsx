import React from 'react';
import { hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentDidMount() {
    if (location.hash.includes("edit")) {
      this.props.fetchReview(this.props.params.roomId, this.props.params.reviewId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.review);
  }

  renderErrors() {
    return(
      <ul className="review-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };  
  }

  handleCancelClick(e) {
    e.preventDefault();
    this.props.removeReviewErrors();
    if (this.props.formType === "new") {
      hashHistory.push(`/search`);
    } else {
      hashHistory.push(`/rooms/${this.props.params.roomId}`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "new") {
      let newReview = {
        rating: this.state.rating,
        comment: this.state.comment,
        room_id: this.props.params.roomId
      };
      this.props.action(newReview.room_id, newReview).then(() =>
        hashHistory.push(`/rooms/${this.props.params.roomId}`));
    } else {
      this.props.action(this.props.params.roomId, this.state).then(() =>
        hashHistory.push(`/rooms/${this.props.params.roomId}`));
    }
  }

  render() {
    let headerText = this.props.formType === "new" ? "Write a review" :
      "Edit my review";

    return (
      <div className="review-form-page">
        <div className="review-form-container">
          <div className="review-form-message-container">
            <p className="review-form-message">{headerText}</p>
          </div>
          {this.renderErrors()}
          <form className="review-form" onSubmit={this.handleSubmit}>
            <div className="review-form-content">
              <section className='rating-label'>
                Rating
                <select className="review-form-rating"
                  onChange={this.update('rating')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </section>
              <label className="review-form-comment-label"> Comment
                <textarea className="review-form-comment"
                  value={this.state.comment}
                  onChange={this.update('comment')}/>
              </label>
            </div>
            <section className="review-form-buttons">
              <input type="button" className="review-form-cancel-button"
                onClick={this.handleCancelClick} value="Cancel"/>
              <input className='review-form-submit-button'
                type="submit" value="Save"/>
            </section>
          </form>
        </div>
      </div>

    );

  }
}

export default ReviewForm;

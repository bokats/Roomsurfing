import React from 'react';
import { hashHistory } from 'react-router';

class RoomDetailsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleBook = this.handleBook.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBook(e) {
    e.preventDefault();
    hashHistory.push(`/rooms/${this.props.roomDetails.id}/book`);
  }

  handleDelete(reviewId) {
    return e => {
      e.preventDefault();
      this.props.deleteReview(this.props.roomDetails.id, reviewId);
    };
  }

  renderReviews() {

    let deleteButton = (
      <button className="delete-review-button">
      </button>
    );

    if (this.props.roomDetails.reviews) {
      return (
        <div className="reviews-index">
          {Object.keys(this.props.roomDetails.reviews).map(id => {
            if (this.props.currentUser &&
              this.props.roomDetails.reviews[id].author_id === this.props.currentUser.id) {
              return (
              <div className="review" key={id}>
                <div className="review-content">
                  <div className="review-info">
                    <p className="review-author">{this.props.roomDetails.reviews[id].author_first_name} {this.props.roomDetails.reviews[id].author_last_name}</p>
                    <p className="author-city">{this.props.roomDetails.reviews[id].author_city}</p>
                    <p className="review-rating">Rating: {this.props.roomDetails.reviews[id].rating}</p>
                    <p className="review-comment">{this.props.roomDetails.reviews[id].comment}</p>
                  </div>
                  <button className="delete-review-button"
                    onClick={this.handleDelete(this.props.roomDetails.reviews[id].id)}>
                      Delete
                  </button>
                </div>
              </div>);
            } else {
              return (
                <div className="review" key={id}>
                  <div className="review-content">
                    <div className="review-info">
                      <p className="review-author">{this.props.roomDetails.reviews[id].author_first_name} {this.props.roomDetails.reviews[id].author_last_name}</p>
                      <p className="author-city">{this.props.roomDetails.reviews[id].author_city}</p>
                      <p className="review-rating">Rating: {this.props.roomDetails.reviews[id].rating}</p>
                      <p className="review-comment">{this.props.roomDetails.reviews[id].comment}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="room-details">
        <div className="room-details-title-container">
          <p className="room-details-title">{this.props.roomDetails.title}</p>
          <p className="room-details-host">
            Hosted by: {this.props.roomDetails.host_first_name} {this.props
              .roomDetails.host_last_name}
          </p>
        </div>
        <div className="room-details-image">
          <img src={this.props.roomDetails.image_url} width="100%"></img>
        </div>
        <div className="room-details-content">
          <div className="room-details-info">

            <p className="room-details-address">
              {this.props.roomDetails.address}
            </p>
            <p className="room-details-city">
              {this.props.roomDetails.city}
            </p>
            <p className="room-details-dates">
              Available Dates: {this.props.roomDetails.avail_start} to {this.
                props.roomDetails.avail_end}
            </p>
          </div>
          <button className="book-room-button" onClick={this.handleBook}>
            Book Room
          </button>
        </div>
        <p className="room-details-description">
          {this.props.roomDetails.description}
        </p>
        <div className="room-reviews-container">
          <p className="reviews-message">
            REVIEWS
          </p>
          {this.renderReviews()}
        </div>
        <div className='bottom-placeholder'></div>
      </div>);
  }
}

export default RoomDetailsInfo;

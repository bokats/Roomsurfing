import React from 'react';
import { hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }


  render() {
    let headerText = this.props.formType === "new" ? "Add a review" :
      "Edit my review";

    return (
      <div className="review-form-container">
        <div className="review-form-message-container">
          <p className="review-form-message"></p>
        </div>
        {this.renderErrors()}
        <form className="review-form">
          <div className="review-form-content">
            <fieldset className="rating"> Room Rating
              <input type="radio" id="star5" name="rating" value="5" />
              <input type="radio" id="star4" name="rating" value="4" />
              <input type="radio" id="star3" name="rating" value="3" />
              <input type="radio" id="star2" name="rating" value="2" />
              <input type="radio" id="star1" name="rating" value="1" />
            </fieldset>
            <label className="review-form-comment-label"> Comment
              <textarea className="review-form-comment"/>
            </label>
          </div>
        </form>
      </div>
    );

  }
}

export default ReviewForm;

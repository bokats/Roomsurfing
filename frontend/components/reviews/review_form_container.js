import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  let review = {rating: 1, comment: ""};
  let formType = "new";
  if (ownProps.location.pathname.includes("edit")) {
    review = state.room_details.reviews[ownProps.params.reviewId];
  }

  let errors = Object.keys(state.errors.reviews).map(id =>
    state.errors.reviews[id]);
  return { review, formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // let action = creat
};

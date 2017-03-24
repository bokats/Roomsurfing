import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview } from '../../actions/reviews_actions';
import { removeReviewErrors } from '../../actions/errors_actions';

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
  let action = createReview;
  if (location.hash.includes("edit")) {
    action = updateReview;
  }

  return {
    action: (roomId, review) => dispatch(action(roomId, review)),
    fetchReview: (roomId, reviewId) => dispatch(fetchReview(roomId, reviewId)),
    removeReviewErrors: () => dispatch(removeReviewErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

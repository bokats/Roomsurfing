import { UPDATE_FILTER } from '../actions/filters_actions';
import merge from 'lodash/merge';

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (day < 10) {
  day = `0${day}`;
}

if (month < 10) {
  month = `0${month}`;
}

const _defaultFilters = Object.freeze({
  city: "",
  startDate: `${year}-${month}-${day}`,
  endDate: `${year + 1}-${month}-${day}`,
  mapCenter: {
    center: { lat: 37.7758, lng: -122.435 },
    zoom: 2
  }
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;

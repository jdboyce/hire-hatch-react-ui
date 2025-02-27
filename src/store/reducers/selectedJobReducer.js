import { SET_SELECTED_JOB } from "../actions/selectedJobActions";

const initialState = null;

const selectedJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_JOB:
      return action.payload;
    default:
      return state;
  }
};

export default selectedJobReducer;

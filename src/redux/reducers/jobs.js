import { ADD_TO_COMPANY_JOBS, ADD_TO_JOBS, REMOVE_FROM_COMPANY_JOBS, REMOVE_FROM_JOBS } from "../actions";

const initialState = {
  companyjobs: [],
  jobs: [],
  query: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_JOBS:
      return {
        ...state,
        jobs: state.jobs.concat(action.payload),
      };
    case REMOVE_FROM_JOBS:
      return {
        ...state,
        jobs: state.jobs.filter(elem => elem._id !== action.payload._id),
      };
    case ADD_TO_COMPANY_JOBS:
      return {
        ...state,
        companyjobs: state.companyjobs.concat(action.payload),
      };
    case REMOVE_FROM_COMPANY_JOBS:
      return {
        ...state,
        companyjobs: state.companyjobs.filter(elem => elem._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default jobsReducer;

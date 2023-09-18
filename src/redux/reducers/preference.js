import { ADD_TO_PREFERENCES, REMOVE_FROM_PREFERENCES } from "../actions";

const initialState = {
  preferences: [],
};

const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREFERENCES:
      return {
        ...state,
        preferences: state.preferences.concat(action.payload),
      };
    case REMOVE_FROM_PREFERENCES:
      return {
        ...state,
        preferences: state.preferences.filter(elem => elem._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default preferencesReducer;

export const ADD_TO_PREFERENCES = "ADD_TO_PREFERENCES";
export const REMOVE_FROM_PREFERENCES = "REMOVE_FROM_PREFERENCES";
export const ADD_TO_JOBS = "ADD_TO_JOBS";
export const REMOVE_FROM_JOBS = "REMOVE_FROM_JOBS";
export const ADD_QUERY = "ADD_QUERY";
export const REMOVE_QUERY = "REMOVE_QUERY";
export const ADD_TO_COMPANY_JOBS = "ADD_TO_COMPANY_JOBS";
export const REMOVE_FROM_COMPANY_JOBS = "REMOVE_FROM_COMPANY_JOBS";

export const addToPreferencesAction = job => ({ type: ADD_TO_PREFERENCES, payload: job });
export const removeFromPreferencesAction = job => ({ type: REMOVE_FROM_PREFERENCES, payload: job });
export const addToJobsAction = array => ({ type: ADD_TO_JOBS, payload: array });
export const removeFromJobsAction = array => ({ type: REMOVE_FROM_JOBS, payload: array });
export const addQueryAction = string => ({ type: ADD_QUERY, payload: string });
export const removeQueryAction = () => ({ type: REMOVE_QUERY, payload: "" });
export const addToCompanyJobsAction = array => ({ type: ADD_TO_COMPANY_JOBS, payload: array });
export const removeFromCompanyJobsAction = array => ({ type: REMOVE_FROM_COMPANY_JOBS, payload: array });

export const fetchJobs = query => {
  return async (dispatch, getState) => {
    try {
      let baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(addToJobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompanyJobs = params => {
  return async (dispatch, getState) => {
    try {
      let baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(addToCompanyJobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

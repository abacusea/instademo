import { actionTypes } from "../actions/actionTypes";


const initialState = {
  postFeeds:[],
  isDataFetchDone: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.response,
        isDataFetchDone: true
      }
    default:
      return {
        ...state,
      }
  }
};

export default reducer

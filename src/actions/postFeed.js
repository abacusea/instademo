import { actionTypes } from "./actionTypes";
import axios from 'axios'
// import { fetchPostFeed } from "../services/fetchPostFeed";

// export const postFeedIsLoading = bool => {
//   return {
//     type: actionTypes.IS_LOADING,
//     isLoading: bool
//   };
// };

export const fetchDataSuccess = response => {
	console.log(response)
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    response
  };
};

// export const fetchPosts = response => dispatch => {
//   console.log('innnnnn')
//   dispatch(fetchDataSuccess(response))
// }

// export const postFeedFetchData = url => {
//   return async dispatch => {
//     dispatch(postFeedIsLoading(true));
//     const postFeeds = await fetchPostFeed(url);
//     dispatch(fetchDataSuccess(postFeeds));
//     dispatch(postFeedIsLoading(false));
//   };
// };
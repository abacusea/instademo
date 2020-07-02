import { actionTypes } from "./actionTypes";

export const addBookmark = id => {
  return {
    type: actionTypes.ADD_BOOKMARK,
    id
  };
};
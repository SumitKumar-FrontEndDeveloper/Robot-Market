import {
  ROBOT_LIST_FETCH_REQUEST,
  ROBOT_LIST_FETCH_FAILURE
} from "./types";

export const robotListRequest = (data) => {
  return {
    type: ROBOT_LIST_FETCH_REQUEST,
    ...data
  };
};

export const robotListFailure = (error) => {
  return {
    type: ROBOT_LIST_FETCH_FAILURE,
    error,
  };
};

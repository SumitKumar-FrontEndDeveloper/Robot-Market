import {
  ROBOT_LIST_FETCH_REQUEST,
  ROBOT_LIST_FETCH_FAILURE
} from "../actions/robot/types";

const robotReducer = (state, action) => {

  const defaultState = {
    isLoading: false,
    error: "",
    robotList: null,
    ...state
  }
  switch (action.type) {
    case ROBOT_LIST_FETCH_REQUEST:
      return {
        ...defaultState,
        error: '',
        ...action
      };
    
    case ROBOT_LIST_FETCH_FAILURE:
      return {
        ...defaultState,
        error: "Something went wrong",
      };
    default:
      return defaultState;
  }
};
export default robotReducer;

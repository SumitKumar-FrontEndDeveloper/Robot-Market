import {
  robotListRequest,
  robotListFailure,
} from "./robot";
import API from "../../api";

export const fetchRobotList = () => async (dispatch) => {
  try {
    dispatch(robotListRequest({isLoading : true}));
    const headers = {};
    const response = await API.get("http://localhost:8000/api/robots", {}, undefined)
    console.log(response)
    dispatch(robotListRequest({isLoading : false,pokeList: response?.data}));
    return response?.data;
  }
    catch(error) {
      dispatch(robotListFailure(error));
      return false;
    }
};

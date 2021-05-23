import { combineReducers } from "redux";
import robotReducer from "./robot-reducer";

export default function getRootReducer() {
  return combineReducers({
    robotReducer,
  });
}

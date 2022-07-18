import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { userReducer } from "./userRedicer";

export const rootReducer = combineReducers({
  questions: questionReducer,
  users: userReducer,
});

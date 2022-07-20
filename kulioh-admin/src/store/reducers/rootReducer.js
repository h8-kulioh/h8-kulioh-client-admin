import { combineReducers } from "redux";
import { questionDailyReducer } from "./questionReducer";
import { questionWeeklyReducer } from "./questionWeeklyReducer";
import { userReducer } from "./userRedicer";

export const rootReducer = combineReducers({
  questionsDaily: questionDailyReducer,
  questionWeekly: questionWeeklyReducer,
  users: userReducer,
});

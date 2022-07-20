import { FETCH_QUESTION_WEEKLY } from "../actions/actionType";

const initialState = {
  questionsWeekly: [],
};
export const questionWeeklyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_WEEKLY:
      return { ...state, questionsWeekly: action.payload };
    default:
      return state;
  }
};

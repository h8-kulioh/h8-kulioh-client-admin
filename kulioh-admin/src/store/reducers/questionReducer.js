import { FETCH_QUESTION_DAILY } from "../actions/actionType";

const initialState = {
  questionsDaily: [],
};
export const questionDailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_DAILY:
      return { ...state, questionsDaily: action.payload };
    default:
      return state;
  }
};

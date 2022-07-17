import { FETCH_QUESTION } from "../actions/actionType";

const initialState = {
  questions: [],
};
export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

import axios from "axios";
import { FETCH_QUESTION, urlDailyQuestion } from "./actionType";
export const fetchQuestion = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(urlDailyQuestion);
      dispatch(fetchQuestionSuccess(response.data));
    } catch (err) {
      console.log("ERROR :", err);
    }
  };
};

export const fetchQuestionSuccess = (payload) => {
  return {
    type: FETCH_QUESTION,
    payload,
  };
};

import axios from "axios";
import {
  FETCH_QUESTION_DAILY,
  FETCH_QUESTION_WEEKLY,
  urlAdmin,
  urlQuestionDaily,
  urlQuestionWeekly,
} from "./actionType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export const createQuestion = (data, releaseDate) => {
  return async (dispatch) => {
    try {
      let date = releaseDate.releaseDate.split("-").join("");
      const response = await axios({
        url: urlAdmin + "/weekly-questions",
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          data,
          date,
        },
      });
    } catch (err) {
      console.log("ERROR : ", err);
    }
  };
};

export const registerAdmin = (data) => {
  return async () => {
    try {
      const res = await axios.post(urlAdmin + "/register", data);
      console.log(res);
      MySwal.fire({
        icon: "success",
        title: "Success register",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
};

export const questionDaily = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: urlQuestionDaily + "/daily",
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchQuestionDailySuccess(res.data));
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
};

export const questionWeekly = (date) => {
  return async (dispatch) => {
    try {
      if (!date) {
        throw new Error("null");
      }
      const convertDate = date.split("-").join("");
      const res = await axios({
        url: urlQuestionWeekly + convertDate,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchQuestionWeeklySuccess(res.data));
    } catch (error) {
      console.log("ERROR : ", error);
      MySwal.fire({
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};

export const fetchQuestionDailySuccess = (payload) => {
  return {
    type: FETCH_QUESTION_DAILY,
    payload,
  };
};

export const fetchQuestionWeeklySuccess = (payload) => {
  return {
    type: FETCH_QUESTION_WEEKLY,
    payload,
  };
};

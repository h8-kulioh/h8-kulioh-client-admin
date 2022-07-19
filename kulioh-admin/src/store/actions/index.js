import axios from "axios";
import { FETCH_QUESTION, urlAdmin, urlWeeklyQuestion } from "./actionType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const createQuestion = (data, releaseDate) => {
  return async (dispatch) => {
    try {
      let date = releaseDate.releaseDate.split("-").join("/");
      const response = await axios.post(urlAdmin + "/weekly-questions", {
        data,
        date,
      });
      console.log(response);
    } catch (err) {
      console.log("ERROR : ", err);
    }
  };
};

export const registerAdmin = (data) => {
  return async () => {
    try {
      const res = await axios.post(urlAdmin + "/register", data);
      console.log(res.sta);
      MySwal.fire({
        position: "top-end",
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

// export const questionWeekly = () => {
//   return async () => {
//     try {
//       const res = await axios.get(urlWeeklyQuestion + "/user-answer");
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// export const fetchQuestionSuccess = (payload) => {
//   return {
//     type: FETCH_QUESTION,
//     payload,
//   };
// };

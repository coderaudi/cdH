// src/js/actions/index.js
import { ADD_ARTICLE } from "../actions/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// export const addArticle = data => dispatch => {
//   dispatch({ type: ADD_ARTICLE, payload: data });
// };

//import axios from "axios";

// export const addArticle = payload => dispatch => {
//   dispatch({ type: ADD_ARTICLE, payload });
// };

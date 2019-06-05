import { ADD_ARTICLE } from "../actions/action-types";

const INIT_STATE = {
  adminName: "defAdmNm_audi",
  adminMail: "adm@sys.com"
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };

    default:
      return {
        ...state
      };
  }
};

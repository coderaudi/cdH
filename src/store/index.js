// src/js/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// all reducers list
import articleReducer from "../reducers/articleReducer";
import adminReducer from "../reducers/adminReducer";

const rootReducer = combineReducers({
  article: articleReducer,
  admin: adminReducer
});

const store = createStore(rootReducer);

// global store
console.log(store.getState());

export default store;

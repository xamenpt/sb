import { combineReducers } from "redux";
// as formReducer is just to change the name on the spot so we dont confuse ourselves
//the reducer is called in fact 'reducer'
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});

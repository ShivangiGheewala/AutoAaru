import { combineReducers } from "redux";
import urlData from "./videoURLReducer";
import pageData from "./loginReducer";

const allReducers = combineReducers({
  urlData: urlData,
  loginData: pageData
});
export default allReducers;

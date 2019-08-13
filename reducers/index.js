import { combineReducers } from "redux";
import urlData from "./videoURLReducer";

const allReducers = combineReducers({
  urlData: urlData
});
export default allReducers;

import { FETCH_URL_SUCCESS } from "../actions/types";

export default function videoURLReducer(state = [], action) {
  switch (action.type) {
    case FETCH_URL_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

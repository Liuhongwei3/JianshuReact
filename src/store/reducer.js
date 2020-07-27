import {combineReducers} from "redux";
import headerReducer from "./reducer/headerReducer";

export default combineReducers({
  header: headerReducer
})
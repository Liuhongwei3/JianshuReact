import {combineReducers} from "redux";
import headerReducer from "./reducer/headerReducer";
import homeReducer from "./reducer/homeReducer";

export default combineReducers({
  header: headerReducer,
  home: homeReducer
})
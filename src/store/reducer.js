import {combineReducers} from "redux";
import headerReducer from "./reducer/headerReducer";
import homeReducer from "./reducer/homeReducer";
import detailReducer from "./reducer/detailReducer";
import loginReducer from "./reducer/loginReducer";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})
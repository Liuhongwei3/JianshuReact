import {fromJS} from "immutable";

const defaultState = fromJS({
  detail: {}
});

export default (state = defaultState,action)=>{
  switch (action.type) {
    case "get_detail":
      return state.set("detail",action.value);
    default:
      return state;
  }
}
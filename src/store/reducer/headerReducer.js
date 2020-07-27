import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseEnter: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "search_focus":
    case "search_blur":
      return state.set("focused", action.value)
    case "change_list":
      // return state.set("list", action.value).set("totalPage",action.totalPage)
      return state.merge({
        list: action.value,
        totalPage: action.totalPage
      })
    case "mouse_enter":
      return state.set("mouseEnter", true);
    case "mouse_leave":
      return state.set("mouseEnter", false);
    case "change_page":
      return state.set("page", action.page);
    default:
      return state;
  }
}
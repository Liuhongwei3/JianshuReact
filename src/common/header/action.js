import {fromJS} from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: "search_focus",
  value: true
});

export const searchBlur = () => ({
  type: "search_blur",
  value: false
});

// export const onMouseEnter = () => ({
//   type: actionTypes.MOUSE_ENTER
// });
//
// export const onMouseLeave = () => ({
//   type: actionTypes.MOUSE_LEAVE
// });
//
// export const changePage = page => ({
//   type: actionTypes.CHANGEPAGE,
//   page
// });

const changList = data => ({
  type: "change_list",
  value: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
  return dispatch => {
    axios.get("/api/headerList.json")
        .then(res => {
          const {data: {data}} = res;
          dispatch(changList(data));
        })
        .catch(() => {
          console.log("error");
        });
  };
};

export const onMouseEnter = () => ({
  type: "mouse_enter"
});

export const onMouseLeave = () => ({
  type: "mouse_leave"
});

export const changePage = page => ({
  type: "change_page",
  page
});
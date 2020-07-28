import axios from "axios";

const detailAction = (value)=>({
  type: "get_detail",
  value
})

export const getDetail = id => {
  return (dispatch) => {
    axios.get('./api/detail.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(detailAction(data[id-1]));
        })
        .catch((err) => console.log(err))
  }
}
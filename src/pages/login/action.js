import axios from 'axios';

const loginAction = (status) => ({
  type: "set_login",
  status
})

const logoutAction = (status) => ({
  type: "set_logout",
  status
})

export const loginAccount = (name, pwd) => {
  return (dispatch) => {
    axios.get(`./api/login.json?name=${name}&pwd=${pwd}`)
        .then((res) => {
          const {data: {data: {status}}} = res;
          dispatch(loginAction(status));
        })
        .catch((err) => console.log(err))
  }
}

export const logoutAccount = () => {
  return (dispatch) => {
    axios.get(`./api/logout.json`)
        .then((res) => {
          const {data: {data: {status}}} = res;
          dispatch(logoutAction(status));
        })
        .catch((err) => console.log(err))
  }
}
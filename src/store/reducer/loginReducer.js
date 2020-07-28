import {fromJS} from 'immutable';

const defaultState = fromJS({
  loginStatus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {

    case "set_login":
    case "set_logout":
      return state.set('loginStatus', action.status)
    default:
      return state;
  }
}
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}
//thunk
export const getAuth = () => async (dispatch) => {
  let data = await authAPI.getAuth();
  if (data.resultCode === 0) {
    let {id, email, login} = data.data;
    dispatch(setUserData(id, email, login, true));
  }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuth())
  }
}
export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
}
export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {userId, email, login, isAuth}
});
export default authReducer;
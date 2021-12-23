import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    {id: 1, message: 'Hi, everybody!', likes: 13},
    {id: 2, message: 'how r u', likes: 5},
  ],
  profile: null,
  status: '',
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: action.newPostText,
        likes: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(post => post.id !== action.postId),
      };
    default:
      return state;
  }
}

//thunk
export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export default mainPageReducer;
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_AVATAR = 'SET_AVATAR';

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
    case SET_AVATAR:
      return {
        ...state,
        profile: {...state.profile, photos: {...state.profile.photos, large: action.photos.large}}
      };
    default:
      return state;
  }
}

//thunk
export const getProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const saveAvatar = (file) => async (dispatch) => {
  let data = await profileAPI.saveAvatar(file)
  if (data.resultCode === 0) {
    dispatch(setAvatar(data.data.photos));
  }
}


export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setAvatar = (photos) => ({type: SET_AVATAR, photos});


export default mainPageReducer;
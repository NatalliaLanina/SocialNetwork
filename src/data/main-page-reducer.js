const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postsData: [
    {id: 1, message: 'Hi, everybody!', likes: 13},
    {id: 2, message: 'how r u', likes: 5},
  ],
  newPostText: '',
  profile: null,
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPost,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }

}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) =>
  ({type: UPDATE_NEW_POST_TEXT,newPost: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default mainPageReducer;
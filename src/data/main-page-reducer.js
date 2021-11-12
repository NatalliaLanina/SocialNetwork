const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {id: 1, message: 'Hi, everybody!', likes: 13},
    {id: 2, message: 'how r u', likes: 5},
  ],
  newPostText: ''
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
    default:
      return state;
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT,newPost: text});

export default mainPageReducer;
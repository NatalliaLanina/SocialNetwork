const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    mainPage: {
      postsData: [
        {id: 1, message: 'Hi, everybody!', likes: 13},
        {id: 2, message: 'how r u', likes: 5},
      ],
      newPostText: ''
    },

    messagesPage: {
      dialogsData: [
        {name: 'User 1', id: 1},
        {name: 'User 2', id: 2},
        {name: 'User 3', id: 3},
        {name: 'User 4', id: 4},
        {name: 'User 5', id: 5},
      ],
      messagesData: [
        {message: 'hi user 2', id: 1},
        {message: 'Hello, glad to see u User 3', id: 2},
        {message: 'see u later', id: 3},
        {message: 'bye', id: 4},
        {message: 'bye', id: 5},
      ],
      newMessageText: '',
    },

    nav: {
      navData: [
        {name: 'Friend 1', id: 1, img: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png'},
        {name: 'Friend 2', id: 2, img: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png'},
        {name: 'Friend 3', id: 3, img: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png'},
        {name: 'Friend 4', id: 4, img: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png'},
        {name: 'Friend 5', id: 5, img: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png'},
      ],
    },
  },
  _reRenderAll() {
    console.log('state');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._reRenderAll = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.mainPage.newPostText,
        likes: 0
      }
      this._state.mainPage.postsData.push(newPost);
      this._state.mainPage.newPostText = '';
      this._reRenderAll(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.mainPage.newPostText = action.newText;
        this._reRenderAll(this._state);
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {
          id: 6,
          message: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._reRenderAll(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.messagesPage.newMessageText = action.newMessage;
        this._reRenderAll(this._state);
    }
  },
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT,newText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text});

export default store;
window.store = store;
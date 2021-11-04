import mainPageReducer from "./main-page-reducer";
import messagePageReducer from "./message-page-reducer";
import navReducer from "./nav-reducer";

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
    mainPageReducer(this._state.mainPage, action);
    messagePageReducer(this._state.messagesPage, action);
    navReducer(this._state.nav, action);

    this._reRenderAll(this._state);
  },
}

export default store;
window.store = store;
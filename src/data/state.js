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

  getState() {
    return this._state;
  },

  reRenderAll() {
    console.log('state');
  },

  addPost() {
    let newPost = {
      id: 6,
      message: this._state.mainPage.newPostText,
      likes: 0
    }
    this._state.mainPage.postsData.push(newPost);
    this._state.mainPage.newPostText = '';
    this.reRenderAll(this._state);
  },

  updateNewPostText(newText) {
    this._state.mainPage.newPostText = newText;
    this.reRenderAll(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.messagesPage.newMessageText,
    }
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this.reRenderAll(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this.reRenderAll(this._state);
  },

  subscribe(observer) {
    this.reRenderAll = observer;
  },


}


export default store;
window.store = store;
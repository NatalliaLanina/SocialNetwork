const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}
const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      }
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, newMessage],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    default:
      return state;
  }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageText = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text});

export default messagePageReducer;
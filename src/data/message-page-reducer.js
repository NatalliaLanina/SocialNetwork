const SEND_MESSAGE = 'SEND-MESSAGE';


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
}
const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageText,
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText} );

export default messagePageReducer;
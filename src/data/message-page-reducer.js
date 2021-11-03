const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagePageReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      }
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      break;
    default:
      return state;
  }
  return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text});

export default messagePageReducer;
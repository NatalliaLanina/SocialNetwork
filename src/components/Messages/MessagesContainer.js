import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/message-page-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageActionCreator: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageTextActionCreator: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
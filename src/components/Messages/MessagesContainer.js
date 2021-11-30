import {sendMessage, updateNewMessageText} from "../../data/message-page-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth,
  }
}

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
})(Messages);

export default MessagesContainer;




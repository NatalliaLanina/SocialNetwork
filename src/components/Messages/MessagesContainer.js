import {sendMessage, updateNewMessageText} from "../../data/message-page-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
  }
}

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
})(AuthRedirectComponent);

export default MessagesContainer;




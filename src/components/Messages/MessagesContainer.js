import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/message-page-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }
  let onMessageChange = (text) => {
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Messages sendMessageActionCreator={sendMessage} updateNewMessageTextActionCreator={onMessageChange} dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData} newMessageText={state.messagesPage.newMessageText}/>
  )
}

export default MessagesContainer;
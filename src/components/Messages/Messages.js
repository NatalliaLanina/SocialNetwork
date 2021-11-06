import messClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/message-page-reducer";


const Messages = (props) => {
  //let state = props.store.getState().dialogsData;
  let dialogsElements = props.data.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id}/>
  ));

  let messagesElements = props.data.messagesData.map(mess => (
    <Message message={mess.message}/>
  ));

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }
  let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={messClass.dialogs}>

      <div className={messClass.dialogs_items}>
        {dialogsElements}
      </div>

      <div className={messClass.messages}>
        <div className={messClass.messagesElements}>
          {messagesElements}
        </div>

        <div className={messClass.add_message}>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
          <button onClick={sendMessage}>Send message</button>
        </div>

      </div>
    </div>
  )
}

export default Messages;
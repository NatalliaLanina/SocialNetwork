import messClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Messages = (props) => {
  let dialogsElements = props.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
  ));

  let messagesElements = props.messagesData.map(mess => (
    <Message key={mess.id} message={mess.message}/>
  ));

  let sendMessage = () => {
    props.sendMessage();
  }
  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
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
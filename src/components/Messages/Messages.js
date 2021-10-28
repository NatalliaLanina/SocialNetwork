import messClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {

  let dialogsElements = props.data.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id}/>
  ));
  let messagesElements = props.data.messagesData.map(mess => (
    <Message message={mess.message}/>
  ));


  let addMessageElement = React.createRef();   //create link to textarea
  let addMessage = () => {
    props.addMessage();
  }
  let onMessageChange = () => {
    let text = addMessageElement.current.value;
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
          <textarea onChange={onMessageChange} ref={addMessageElement} value={props.newMessageText}/>
          <button onClick={addMessage}>Add message</button>
        </div>

      </div>
    </div>
  )
}

export default Messages;
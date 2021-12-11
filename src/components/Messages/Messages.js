import messClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Form, Field} from 'react-final-form'
import {Textarea} from "../common/FormControls/FormControls";
import {maxLength, required} from "../../utilities/validators/validators";

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const Messages = (props) => {
  let dialogsElements = props.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
  ));
  let messagesElements = props.messagesData.map(mess => (
    <Message key={mess.id} message={mess.message}/>
  ));

  const onSubmit = (values) => {
    props.sendMessage(values.newMessageText)
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
        <MessagesForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const MessagesForm = (props) => {
  return <Form
    initialValues={{
      newMessageText: '',
    }}
    onSubmit={props.onSubmit}
    validate={values => {
    }}
    render={({handleSubmit, pristine, form, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field
            type='textarea'
            name="newMessageText"
            component={Textarea}
            validate={composeValidators(required, maxLength(30))}
            placeholder='Enter your message'/>
        </div>
        <div>
          <button disabled={submitting} type="submit">Send message</button>
        </div>
      </form>
    )}
  />
}

export default Messages;
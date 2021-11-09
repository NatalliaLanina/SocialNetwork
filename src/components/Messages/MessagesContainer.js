import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/message-page-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";



/*
const MessagesContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }
  let onMessageChange = (text) => {
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Messages sendMessageActionCreator={sendMessage}
              updateNewMessageTextActionCreator={onMessageChange}
              dialogsData={state.messagesPage.dialogsData}
              messagesData={state.messagesPage.messagesData}
              newMessageText={state.messagesPage.newMessageText}/>
  )
}
*/

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
import {sendMessage} from "../../data/message-page-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
  }
}


export default compose(
  connect(mapStateToProps, {sendMessage}), withAuthRedirect)(Messages);


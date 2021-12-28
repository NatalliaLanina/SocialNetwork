import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, saveAvatar, updateStatus} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class MainContainer extends React.Component {
  refreshMain() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;   //20801;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshMain()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshMain();
    }
  }

  render() {
    return (
      <Main
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        saveAvatar={this.props.saveAvatar}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
  status: state.mainPage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus, saveAvatar}),
  withRouter,
  withAuthRedirect
)(MainContainer);


/*
let AuthRedirectComponent = withAuthRedirect(MainContainer);

let UrlContainerComponent = withRouter(AuthRedirectComponent);
*/

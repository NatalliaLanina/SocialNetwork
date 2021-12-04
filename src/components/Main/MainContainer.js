import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class MainContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20801;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);

  }
  render() {
    return (
      <Main {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
  status: state.mainPage.status,
})

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(MainContainer);


/*
let AuthRedirectComponent = withAuthRedirect(MainContainer);

let UrlContainerComponent = withRouter(AuthRedirectComponent);
*/

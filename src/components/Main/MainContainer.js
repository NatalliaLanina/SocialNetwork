import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class MainContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      <Main {...this.props} profile={this.props.profile}/>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
})

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)(MainContainer);


/*
let AuthRedirectComponent = withAuthRedirect(MainContainer);

let UrlContainerComponent = withRouter(AuthRedirectComponent);
*/

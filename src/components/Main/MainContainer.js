import Main from "./Main";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";


class MainContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data);
    });
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


let UrlContainerComponent = withRouter(MainContainer);
export default connect(mapStateToProps, {setUserProfile})(UrlContainerComponent);
import Main from "./Main";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../data/main-page-reducer";


class MainContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export default connect(mapStateToProps, {setUserProfile})(MainContainer);
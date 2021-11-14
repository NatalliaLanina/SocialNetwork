import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setFriendsAC, unfollowAC} from "../../data/friends-page-reducer";


const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setFriends: (users) => {
      dispatch(setFriendsAC(users));
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
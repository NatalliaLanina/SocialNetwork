import Friends from "./Friends";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setFriendsAC,
  setTotalUsersCountAC,
  unfollowAC
} from "../../data/friends-page-reducer";


const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
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
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
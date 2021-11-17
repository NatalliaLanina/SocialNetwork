import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setFriendsAC, setIsFetchingAC,
  setTotalUsersCountAC,
  unfollowAC
} from "../../data/friends-page-reducer";
import React from "react";
import * as axios from "axios";
import Friends from "./Friends";
import spinner from "./spinner.svg"

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.items);
    });
  };

  render() {
    return <>
      {this.props.isFetching ? <div><img src={spinner} alt={1111} style={{position:"absolute", top:"50%", left:"50%"}}/> </div>: null}
      <Friends onPageChanged={this.onPageChanged}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               friendsData={this.props.friendsData}
               follow={this.props.follow}
               unfollow={this.props.unfollow}

      />
    </>
  }
}


const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);

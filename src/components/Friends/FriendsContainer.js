import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setFriends,
  setIsFetching,
  setTotalUsersCount,
  unfollow
} from "../../data/friends-page-reducer";
import React from "react";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setFriends(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    usersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setFriends(data.items);
    });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
})(FriendsContainer);


/*
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
*/
import friendsClass from './Friends.module.css';
import React from "react";
import * as axios from "axios";
import userPhoto from './user.png';

class Friends extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setFriends(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.setFriends(response.data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div className={friendsClass.pages}>
        {pages.map(page => {
          return <span onClick={() => {
            this.onPageChanged(page)
          }} className={this.props.currentPage === page && friendsClass.selectedPage}>{page}</span>
        })}
      </div>

      {this.props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
        <div className={friendsClass.avatar}>
          <div>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="111"/>
          </div>
          <div>{user.followed ? <button onClick={() => {
            this.props.unfollow(user.id)
          }}>Unfollow</button> : <button onClick={() => {
            this.props.follow(user.id)
          }}>Follow</button>}</div>
        </div>
        <div className={friendsClass.item}>
          <div>
            <div className={friendsClass.name}>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </div>
        </div>
      </div>)}
    </div>
  }
}

export default Friends;


/*const Friends = (props) => {
  const getFriends = () => {
    if (props.friendsData.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setFriends(response.data.items);
      });
    }
  }

  return <div>
    <button onClick={getFriends}>Get friends</button>
    {props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
      <div className={friendsClass.avatar}>
        <div>
          <img src={user.photos.small} alt="111"/>
        </div>
        <div>{user.followed ? <button onClick={() => {
          props.unfollow(user.id)
        }}>Unfollow</button> : <button onClick={() => {
          props.follow(user.id)
        }}>Follow</button>}</div>
      </div>
      <div className={friendsClass.item}>
        <div>
          <div className={friendsClass.name}>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      </div>
    </div>)}
  </div>
};*/
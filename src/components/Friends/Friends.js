import friendsClass from './Friends.module.css';
import React from "react";
import * as axios from "axios";
import userPhoto from './user.png';

class Friends extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setFriends(response.data.items);
    });
  }

  render() {
    return <div>
      {this.props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
        <div className={friendsClass.avatar}>
          <div>
            <img src={user.photos.small !==null ? user.photos.small : userPhoto} alt="111"/>
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
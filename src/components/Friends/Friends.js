import friendsClass from './Friends.module.css';
import React from "react";

const Friends = (props) => {
  return (
    props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
      <div className={friendsClass.avatar}>
        <div>
          <img src={user.avatar} alt="111"/>
        </div>
        <div>{user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}</div>
      </div>

      <div className={friendsClass.item}>
        <div>
          <div className={friendsClass.name}>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </div>
      </div>
    </div>)
  )
}

export default Friends;
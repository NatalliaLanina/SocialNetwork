import React from "react";
import friendsClass from './Friends.module.css';
import userPhoto from './user.png';


let Friends = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={friendsClass.pages}>
      {pages.map(page => {
        return <span onClick={() => {
          props.onPageChanged(page)
        }} className={props.currentPage === page && friendsClass.selectedPage}>{page}</span>
      })}
    </div>

    {props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
      <div className={friendsClass.avatar}>
        <div>
          <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="111"/>
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
}

export default Friends;
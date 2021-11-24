import React from "react";
import friendsClass from './Friends.module.css';
import userPhoto from './user.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


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
        }} className={props.currentPage === page && friendsClass.selectedPage} key={page}>{page}</span>
      })}
    </div>

    {props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
      <div className={friendsClass.avatar}>
        <div>
          <NavLink to={'/main/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="111"/>
          </NavLink>
        </div>
        <div>{user.followed
          ? <button onClick={() => {
           usersAPI.unfollow(user.id).then(data => {
              if (data.resultCode === 0) {
                props.unfollow(user.id)
              }
            });
          }}>Unfollow</button>
          : <button onClick={() => {
            usersAPI.follow(user.id).then(data => {
              if (data.resultCode === 0) {
                props.follow(user.id)
              }
            });
          }}>Follow</button>}
        </div>
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
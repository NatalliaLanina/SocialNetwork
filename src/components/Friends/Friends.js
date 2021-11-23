import React from "react";
import friendsClass from './Friends.module.css';
import userPhoto from './user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY": '5a2ea525-ce0e-4154-b47e-600d0872fe12'
              }
            }).then(response => {
              if (response.data.resultCode === 0) {
                props.unfollow(user.id)
              }
            });
          }}>Unfollow</button>
          : <button onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY": '5a2ea525-ce0e-4154-b47e-600d0872fe12'
              }
            }).then(response => {
              if (response.data.resultCode === 0) {
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
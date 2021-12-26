import React from "react";
import friendsClass from './Friends.module.css';
import userPhoto from './user.png';
import {NavLink} from "react-router-dom";
//material ui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


let Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return <div>
    <Stack>
      <Pagination
        className={friendsClass.pages}
        count={pagesCount}
        variant="outlined"
        color="primary"
        size={"small"}
        onChange={(event, page) => {
          props.onPageChanged(page);
        }}
      />
    </Stack>

    {props.friendsData.map(user => <div key={user.id} className={friendsClass.main}>
      <div className={friendsClass.avatar}>
        <div>
          <NavLink to={'/main/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="111"/>
          </NavLink>
        </div>
        <div>{user.followed ? <button onClick={() => {
            props.unfollow(user.id)
          }}>Unfollow</button>
          : <button onClick={() => {
            props.follow(user.id)
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
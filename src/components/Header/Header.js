import headClass from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../Friends/user.png"

function Header(props) {

  return (
    <header className={headClass.header}>
      <div className={headClass.header__container}>
        <div className={headClass.header__logo}>
          <img
            className={headClass.logo}
            src={"https://cdn-icons-png.flaticon.com/512/5547/5547473.png"}
            alt="logo"/>
        </div>

        <div className={headClass.header__title}>
          <h1>Social network</h1>
        </div>

        <div className={headClass.avatar__container}>
          {props.isAuth ? <div><img className={headClass.avatar} src={props.profile.photos.large || userPhoto} alt="111"/></div> :
            <NavLink to={'/login'}>Login</NavLink>
          }
          {props.isAuth ? <div>{props.login}
              <div>
                <button onClick={props.logout}>Log out</button>
              </div>
            </div> :
            <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
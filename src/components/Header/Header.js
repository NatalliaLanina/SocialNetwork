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
            src="https://cdn-icons-png.flaticon.com/512/5547/5547473.png"
            alt="logo"/>
        </div>
        <div className={headClass.header__title}>
          <h1>Social network</h1>
        </div>
        <div>
          {props.isAuth ? props.login :
            <NavLink to={'/login'}><img src={userPhoto} className={headClass.login} alt={333}/></NavLink>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
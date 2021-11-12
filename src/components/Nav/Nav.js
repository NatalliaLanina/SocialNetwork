import navClass from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from "./navFriends/NavFriend";


function Nav(props) {

  let navElements = props.navData.map(el => (
    <NavFriend key={el.id} name={el.name} id={el.id} img={el.img}/>
  ));

  return (
    <div>

      <nav className={navClass.nav}>
        <ul>
          <li><NavLink to="/main" activeClassName={navClass.active} className={navClass.item}>Main</NavLink></li>
          <li><NavLink to="/messages" activeClassName={navClass.active} className={navClass.item}>Messages</NavLink>
          </li>
          <li><NavLink to="/news" activeClassName={navClass.active} className={navClass.item}>News</NavLink></li>
          <li><NavLink to="/friends" activeClassName={navClass.active} className={navClass.item}>Friends</NavLink></li>
          <li><NavLink to="/settings" activeClassName={navClass.active} className={navClass.item}>Settings</NavLink>
          </li>
        </ul>

        <div><h4>Friends</h4></div>

        <div className={navClass.navFriends}>
          {navElements}
        </div>

      </nav>
    </div>
  );
}

export default Nav;


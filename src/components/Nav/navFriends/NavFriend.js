import navClass from './NavFriend.module.css';

function NavFriend(props) {

  return (
    <div className={navClass.navFriend}>
      <img src={props.img} alt={props.id}/>
      <div>{props.name}</div>
    </div>

  );
}

export default NavFriend;


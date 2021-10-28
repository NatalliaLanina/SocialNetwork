import messClass from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={messClass.item + ' ' + messClass.active}>
      <NavLink to={"/messages/" + props.id} activeClassName={messClass.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
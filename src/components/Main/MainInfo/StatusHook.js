import mainInfoClass from "./MainInfo.module.css";
import React, {useState} from "react";

const StatusHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);


  let activateEditMode = () => {
    setEditMode(true);
  }
  let removeEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  let onStatusChange = (event) => {
    setStatus(event.target.value);
  }


  return (
    <div>
      {!editMode && <div className={mainInfoClass.status} onClick={activateEditMode}>{props.status || '-----'}</div>}
      {editMode && <div>
        <input onChange={onStatusChange}
               onBlur={removeEditMode}
               autoFocus={true}
               type="text"
               value={status}
               className={mainInfoClass.statusInput}/>
      </div>}
    </div>
  )
}

export default StatusHook;
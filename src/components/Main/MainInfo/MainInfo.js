import mainInfoClass from './MainInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../Friends/user.png'
import StatusHook from "./StatusHook";

function MainInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }
  const selectAvatar = (event) => {
    if (event.target.files.length) {
      props.saveAvatar(event.target.files[0])
    }
  }
  return (
    <div className={mainInfoClass.main__logo}>
      <div>
        <img
          src={props.profile.photos.large || userPhoto}
          alt="avatar"
        />
        <p>{props.isOwner && <input
          type={'file'}
          onChange={selectAvatar}/>}
        </p>
        <h3>{props.profile.fullName}</h3>
        <StatusHook
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <p>{props.profile.lookingForAJobDescription}</p>
        <p>{props.profile.contacts.github}</p>
      </div>
    </div>
  );
}

export default MainInfo;

/*<div>
        <img src="https://cdn-icons-png.flaticon.com/512/5149/5149017.png" alt="img"/>
      </div>*/

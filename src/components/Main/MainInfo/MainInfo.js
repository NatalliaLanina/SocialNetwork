import mainInfoClass from './MainInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../Friends/user.png'
import Status from './Status'

function MainInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={mainInfoClass.main__logo}>
      <div>
        <img src={props.profile.photos.small !== null ? props.profile.photos.small : userPhoto} alt="1111"/>
        <h3>{props.profile.fullName}</h3>
        <Status status={'hello everyone'}/>
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

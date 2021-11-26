import mainInfoClass from './MainInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


function MainInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={mainInfoClass.main__logo}>
      <div>
        <img src={props.profile.photos.small} alt="1111"/>
        <h3>{props.profile.fullName}</h3>
        <i>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
        </i>
        <p>{props.profile.contacts.github}</p>
      </div>
    </div>
  );
}

export default MainInfo;

/*<div>
        <img src="https://cdn-icons-png.flaticon.com/512/5149/5149017.png" alt="img"/>
      </div>*/

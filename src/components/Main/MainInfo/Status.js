//import Preloader from "../../common/Preloader/Preloader";
import mainInfoClass from "./MainInfo.module.css";
import React from "react";

class Status extends React.Component {
  /*  if (!props.profile) {
      return <Preloader/>
    }*/
  state = {
    editMode: false,
  }

  setEditMode() {
    this.setState({
      editMode: true
    })
  }
  removeEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div onClick={this.setEditMode.bind(this)} className={mainInfoClass.status}>{this.props.status}</div>}
        {this.state.editMode && <div>
          <input autoFocus={true} onBlur={this.removeEditMode.bind(this)} type="text" value={this.props.status} className={mainInfoClass.status}/>
        </div>}
      </div>
    )
  }
}

export default Status;
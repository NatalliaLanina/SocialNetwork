import mainInfoClass from "./MainInfo.module.css";
import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  setEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  removeEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (event) => {
    this.setState({
      status: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div onClick={this.setEditMode} className={mainInfoClass.status}>{this.props.status || '-----'}</div>}
        {this.state.editMode && <div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.removeEditMode} type="text"
                 value={this.state.status} className={mainInfoClass.status}/>
        </div>}
      </div>
    )
  }
}

export default Status;
import classes from "./ProfileInfo.module.css";
import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) => {
       this.setState({
          status: e.currentTarget.value
       });
    };

    componentDidUpdate(prevProps, prevState) {
        if  (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={classes.status}>
                {! this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || 'no-status'}</span>
                </div>
                }
                { this.state.editMode &&
                <div>
                    <input type="text" value={this.state.status} autoFocus={true} onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}/>
                </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;

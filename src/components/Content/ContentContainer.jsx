import React from "react";
import classes from './Content.module.css';
import Content from "./Content";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerContent = withRouter(ContentContainer);

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerContent);

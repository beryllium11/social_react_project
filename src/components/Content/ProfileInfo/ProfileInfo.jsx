import classes from "./ProfileInfo.module.css";
import React from "react";
import myAva from "../../../assets/images/my-ava.png"
import userPhoto from '../../../assets/images/def-ava.png';
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    return (
        <div className={classes.avaDesc}>
            { props.isFetching ? <Preloader/> : null}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={classes.ava}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
            </div>
            <div className={classes.desc}>
                <p>{props.profile.aboutMe != null ? props.profile.aboutMe : "Due to existing experience in developing and releasing stable sites and online stores"}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;

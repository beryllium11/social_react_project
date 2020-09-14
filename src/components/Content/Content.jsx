import React from "react";
import classes from './Content.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostContainer";
import Preloader from "../common/Preloader/Preloader";

const Content = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
            <div className={classes.content}>
               <ProfileInfo profile={props.profile}/>
                <div className={classes.myPost}>
                    <MyPostsContainer  />
                </div>
            </div>
    )
}
export default Content;

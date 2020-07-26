import React from "react";
import classes from './Content.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostContainer";

const Content = (props) => {
    return (
            <div className={classes.content}>
               <ProfileInfo/>
                <div className={classes.myPost}>
                    <MyPostsContainer  />
                </div>
            </div>
    )
}
export default Content;

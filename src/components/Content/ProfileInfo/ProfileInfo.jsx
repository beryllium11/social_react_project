import classes from "./ProfileInfo.module.css";
import React from "react";
import myAva from "../../../assets/images/my-ava.png"


const ProfileInfo = () => {
    return (
        <div className={classes.avaDesc}>
            <div className={classes.ava}>
                <img src={myAva} alt=""/>
            </div>
            <div className={classes.desc}>
                <p>Due to existing experience in developing and releasing stable sites and online stores for the business, I would like to continue improving my skills in the field of front-end development. My goal is to take part in projects, where I can apply all my knowledge and experience into developing quality products and participating in defining project objectives and their implementation.</p>
            </div>
        </div>
    )
}

export default ProfileInfo;

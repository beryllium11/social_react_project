import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
   // const {text, uid} = props.text1;
    let onLikeIncrement = () => {
        let postId = props.id;
        props.likeIncrement(postId);
    };

        return (
            <li className={classes.post}>
                <div>
               <p>{props.message}</p>
                </div>
                <div className={classes.like}><button onClick={onLikeIncrement}>Like!</button><span>{props.likeCounts}</span></div>
            </li>
        )
};
export default Post;


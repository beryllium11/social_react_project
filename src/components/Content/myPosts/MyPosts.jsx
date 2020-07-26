import React from "react";
import classes from "./MyPosts.module.css";
import PostsContainer from "./Post/PostContainer";

const MyPosts = (props) => {
    let postElements = props.posts.map (
      postElem =>   <PostsContainer message={postElem.message} id={postElem.id} key={postElem.id} likeCounts={postElem.likeCounts}/>
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.postsWrapper}>
            <div className={classes.inputWrapper}>
                <textarea placeholder={"anything new?"} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <ul className={classes.postList}>
                {postElements}
            </ul>
        </div>
        )

};
export default MyPosts;


import React, { useState, useEffect } from "react";
import classes from "./MyPosts.module.css";
import PostsContainer from "./Post/PostContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form className={classes.inputWrapper} onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={"anything new?"}
                   name='postArea' validate={[requiredField, maxLength10]}/>
            <button>Add post</button>
        </form>
        )
  };

const AddPostFormRedux = reduxForm({form: 'newPost'})(AddPostForm);

const MyPosts = (props) => {


   let postElements = props.posts.map (
      postElem =>   <PostsContainer message={postElem.message} id={postElem.id} key={postElem.id} likeCounts={postElem.likeCounts}/>
    );

   // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.postArea);
    };

    return (
        <div className={classes.postsWrapper}>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <ul className={classes.postList}>
                {postElements}
            </ul>
        </div>
        )

};
export default MyPosts;


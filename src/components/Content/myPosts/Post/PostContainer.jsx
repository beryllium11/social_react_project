import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import {likeIncrementAC} from "../../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        likeIncrement: (postId) => {
            dispatch(likeIncrementAC(postId))
        }
    }
};



const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Post);

export default PostsContainer;


import React from "react";
import {addMessageActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessText) => {
            dispatch(addMessageActionCreator(newMessText));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
   // withAuthRedirect
)(Dialogs);


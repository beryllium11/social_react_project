import React from "react";
import s from "./Dialogs.module.css";
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";


const maxLength = maxLengthCreator(100);
const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'dialogTextarea'}
                   placeholder={'type your message'} validate={[requiredField, maxLength]} />
            <button>Send</button>
        </form>
    )
};

const DialogFormRedux = reduxForm({form: 'postArea'}) (DialogForm);

const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogsData.map (
        dialogElement =>  <DialogItem name={dialogElement.name} id={dialogElement.id}/>);

    let messagesElements = state.messagesData.map (
        messageElement => <Message message={messageElement.message}/> );
 //   let newMessText = React.createRef();

    let addMessage = (values) => {
        props.addMessage(values.dialogTextarea);
    };

   // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItmes}>
                <h3 className={s.h3title}>Friends</h3>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
};
const DialogItem = (props) => {

    let path = "/dialog/" + props.id;
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        )

};
const Message = (props) => {
    return (
        <div className={s.messagesItem}>
            {props.message}
        </div>
    )
}



export default Dialogs;

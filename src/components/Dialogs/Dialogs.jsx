import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogsData.map (
        dialogElement =>  <DialogItem name={dialogElement.name} id={dialogElement.id}/>);

    let messagesElements = state.messagesData.map (
        messageElement => <Message message={messageElement.message}/> );
    let newMessText = React.createRef();

    let addMessage = () => {

        props.addMessage();
    };

    let onMessChange = () => {
        let showMes = newMessText.current.value;
        props.updateNewMessage(showMes);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItmes}>
                <h3 className={s.h3title}>Friends</h3>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessText}
                          value={state.newMessText}
                          onChange={onMessChange}
                />
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}
const DialogItem = (props) => {

    let path = "/dialog/" + props.id;
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        )

}
const Message = (props) => {
    return (
        <div className={s.messagesItem}>
            {props.message}
        </div>
    )
}



export default Dialogs;

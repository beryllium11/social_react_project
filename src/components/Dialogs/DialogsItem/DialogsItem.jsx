import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialog/" + props.id;
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        )

}


const DialogsItem = (props) => {



    let dialogsData =[
        {id: 1, name: "User-bot"},
        { id: 2, name: "Petya"},
        { id: 3,  name: "Kotovskiy" },
        { id: 4, name: "Anka"}
        ];
    let dialogsElements = dialogsData.map (dialogElement =>
        <DialogItem name={dialogElement.name} id={dialogElement.id}/>);



    return (
                <div className={s.dialogItmes}>
                    {dialogsElements}

                  {/*   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                </div>
    )
}
export default DialogsItem;
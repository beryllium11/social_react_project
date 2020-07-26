const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

        dialogsData: [
            {id: 1, name: "User-bot"},
            {id: 2, name: "Petya"},
            {id: 3, name: "Kotovskiy"},
            {id: 4, name: "Anka"}
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Microsoft Corporation"},
            {id: 3, message: "Version 10.0.17134.765"}
        ],
        newMessText: 'type your message here'
    
};

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 5,
                    message: state.newMessText,
                }],
                dialogsData: [...state.dialogsData],
                newMessText: ''
            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessText: action.newText
            };
        }
        default: return state;
    }

};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};
export default messagesReducer;

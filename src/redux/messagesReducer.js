const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 5,
                    message: action.newMessText,
                }],
                dialogsData: [...state.dialogsData],
            };
        }
        default: return state;
    }

};

export const addMessageActionCreator = (newMessText) => ({ type: ADD_MESSAGE, newMessText });

export default messagesReducer;

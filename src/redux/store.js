import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";

let store ={

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "ok, let's do it!", likeCounts: 20},
                {id: 2, message: "ok, nevermind!", likeCounts: 40},
                {id: 3, message: "Version 10.0.17134.765", likeCounts: 0}
            ],
            newPostText: 'samurai-way'
        },
        friendsPage: {
            friends: [
                {id: 1, name: "Unknown Friend1", avatarSrc: "https://www.freelogodesign.org/Content/img/logo-ex-2.png"},
                {id: 2, name: "Unknown Friend2", avatarSrc: "https://www.freelogodesign.org/Content/img/logo-ex-2.png"},
                {id: 3, name: "Unknown Friend2", avatarSrc: "https://www.freelogodesign.org/Content/img/logo-ex-2.png"}
            ]
        },
        messagesPage: {
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
        }

    },
    _callSubscriber() {
        console.log("state has changed");
    },
    getState() {
        return this._state;
    },

    subscribe (observer)  {
        this._callSubscriber = observer;
    },
    dispatch(action) {  //{type: 'ADD_POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);

    }
};



export default store;
window.store = store;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">
                  <Route path="/dialog"
                         render={ () => <DialogsContainer  />} />
                  <Route path="/profile/:userId?"
                         render={ () => <ContentContainer  />} />
                  <Route path="/users"
                           render={ () => <UsersContainer /> } />
                </div>
                <Footer/>
            </div>
    );
};


export default App;

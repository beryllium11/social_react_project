import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content.jsx';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                  <Route path="/dialog"
                         render={ () => <DialogsContainer  />} />
                  <Route path="/profile"
                         render={ () => <Content  />}  />
                    <Route path="/users"
                           render={ () => <UsersContainer /> } />
                </div>
                <Footer/>
            </div>
    )
};


export default App;

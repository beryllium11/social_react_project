import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        else
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ContentContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

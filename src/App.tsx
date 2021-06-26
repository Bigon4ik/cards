import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Main/Authentefication/Auth/Auth';
import Profile from './components/Main/Profile/Profile';
import {PageNotFounded} from './components/Main/PageNotFounded/PageNotFounded';
import Login from './components/Main/Authentefication/Login/Login';

const App = () => {

    const PATH = {
        AUTH: '/auth',
        LOGIN: 'auth/login',
        PROFILE: '/profile'

    }

    return (
        <div className="App">
            {/*<Header/>*/}
            <Switch>
                <Route path={PATH.AUTH} render={() => <Auth/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route render={() => <PageNotFounded/>}/>

            </Switch>

        </div>
    );
}

export default App;

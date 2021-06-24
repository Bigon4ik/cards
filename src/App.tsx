import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Main/Authentefication/Auth/Auth';
import Profile from './components/Main/Profile/Profile';
import {Packs} from './components/Main/Packs/Packs';
import {Cards} from './components/Main/1_Cards/Cards';
import {PageNotFounded} from './components/Main/PageNotFounded/PageNotFounded';

const App = () => {

    const PATH = {
        AUTH: '/auth',
        LOGIN: 'auth/login',
        PROFILE: '/profile',
        PACKS: '/packs',
        CARDS: '/cards/:id/:name',
    }

    return (
        <div className="App">
            {/*<Header/>*/}
            <Switch>
                <Route path={PATH.AUTH} render={() => <Auth/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={PATH.CARDS} render={() => <Cards/>}/>
                <Route render={() => <PageNotFounded/>}/>

            </Switch>

        </div>
    );
}

export default App;

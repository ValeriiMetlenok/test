import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header';
import UserList from './components/userlist';
import UserForm from './components/userform';

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <UserList />
                    </Route>
                    <Route path="/userform">
                        <UserForm />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;

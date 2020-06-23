import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header';
import ClientList from './components/clientlist';
import UserForm from './components/userform';
import { GetPersons } from './actions/actions';

const App:React.FC<{getPersons: Function}> = ({ getPersons }) => {

    useEffect(() => {
        getPersons()
    }, [getPersons])

    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <ClientList />
                    </Route>
                    <Route path="/userform">
                        <UserForm />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default connect(
    () => ({
    }),
    (dispatch) => ({
        getPersons: () => dispatch<any>(GetPersons()),
    }),
)(App);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Header from './components/header';
import ClientList from './components/clientlist';
import UserForm from './components/userform';
import Comments from './components/comments';
import ErrorRoute from './components/ErrorRoute';
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
                    <Route exact path="/comments/:id" component={Comments} />
                    <Route path="/404" component={ErrorRoute} />
                    <Redirect to="/404" />
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

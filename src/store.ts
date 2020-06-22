import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Clients from './reducers/clients'

const rootReducer = combineReducers({ Clients });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

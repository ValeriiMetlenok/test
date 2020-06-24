import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Clients from './reducers/clients'
import Comments from './reducers/comments'

const rootReducer = combineReducers({ Clients, Comments });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

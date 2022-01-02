import {applyMiddleware, combineReducers, createStore} from 'redux'
import todosReducer from './todosReducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    todosPage: todosReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
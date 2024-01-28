import { createStore, applyMiddleware, compose } from "redux";
import { thunk as thunkMiddleware } from 'redux-thunk'; // Importa thunk directamente desde redux-thunk
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

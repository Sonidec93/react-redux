import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from "redux-thunk";
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/result';
import { compose } from 'redux';



const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer
})

const logging = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching', action);
            const result = next(action);
            console.log('[Middleware] state', store.getState());
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //for redux-dev-tools
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logging, reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


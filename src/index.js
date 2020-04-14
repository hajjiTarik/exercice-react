import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import App from './containers/App';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

ReactDOM.render(
    <ConnectedApp/>,
    document.getElementById('root')
);

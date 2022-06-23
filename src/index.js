// Import the core libraries
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';

// Import the used functions / hooks
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';

// Import the components used
import App from './components/App/App';


// --------------------------------------------------------
// Main REDUX store for our GIF information containing the
// list of our favorite gifs.
const gifArray = (state = [], action) => {
    switch (action.type) {
        case "SET_GIF_LIST":
            return action.payload
        default:
            return state
    }
}


// Main REDUX store for the current GIF we are displaying
// on the search screen.
const searchGif = (state = {}, action) => {
    switch (action.type) {
        case "SET_ONE_GIF":
            return action.payload
        default:
            return state
    }
}


// CORE: --------------------------------------------------
// WatcherSaga that listens for commands and calls the associated function.
function* watcherSaga() {
    // Put yield takeEvery("<command>", __function__)
}

// Initialize the SAGA middleware listener function
const sagaMiddleware = createSagaMiddleware()

// Main store provider for the various REDUX state values
const store = createStore(
    combineReducers({
        gifArray,  // State for the list of favorite GIFS
        searchGif, // Current GIF from our recent search
    }),
    applyMiddleware(sagaMiddleware, logger)
)

// Run the sagaWatcher function too listen for incoming commands
sagaMiddleware.run(watcherSaga)


// --------------------------------------------------------
// REACT function the renders the App information to the DOM
ReactDOM.render(
    // Wrap the `App` with a provider component.
    // This will allow our access to the `store` throughout the App
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
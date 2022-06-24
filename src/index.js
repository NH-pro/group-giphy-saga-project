// Import the core libraries
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import React from "react";
import ReactDOM from "react-dom";

// Import the used functions / hooks
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put } from "redux-saga/effects";

// Import the components used
import App from "./components/App/App";

// --------------------------------------------------------
// Main REDUX store for our GIF information containing the
// list of our favorite gifs.
const gifArray = (state = [], action) => {
  switch (action.type) {
    case "SET_GIF_LIST":
      return action.payload;
    default:
      return state;
  }
};

// Main REDUX store for the current GIF we are displaying
// on the search screen.
const searchGif = (state = {}, action) => {
  switch (action.type) {
    case "SET_ONE_GIF":
      return action.payload;
    default:
      return state;
  }
};

// Reducer for our categories on the DB, mainly used for
// populating the drop-down
const category = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORY_NAMES":
      return action.payload;
    default:
      return state;
  }
};

function* getGiphyGif(action) {
    console.log(`In getGifyGif`, action);
    const response = yield axios.get('/api/search', action);

    yield put({
        type: 'SET_ONE_GIF',
        payload: response.data
    })
}


function* setFavoriteGallery(action) {
  try {
    const response = yield axios.get(`/api/favorite/${action.payload}`);
    console.log(response.data);
    yield put({
      type: "SET_GIF_LIST",
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

// Function that calls the DB to get the list of our category names
// and updates the REDUX state with that array of object values
function* getCategoryNames(action) {
  try {
    const response = yield axios.get("/api/category", action.payload);
    console.log(response.data);
    yield put({
      type: "SET_CATEGORY_NAMES",
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

// CORE: --------------------------------------------------
// WatcherSaga that listens for commands and calls the associated function.
function* watcherSaga() {
    // Listen for a call to get gif from giphy
    yield takeEvery('SEARCH_GIF', getGiphyGif);

  // Put yield takeEvery("<command>", __function__)
  yield takeEvery("SET_FAVORITE_GALLERY", setFavoriteGallery);

  // Listens for call to update the category names from the DB
  yield takeEvery("GET_CATEGORY_NAMES", getCategoryNames);
}

// Initialize the SAGA middleware listener function
const sagaMiddleware = createSagaMiddleware();

// Main store provider for the various REDUX state values
const store = createStore(
  combineReducers({
    gifArray, // State for the list of favorite GIFS
    searchGif, // Current GIF from our recent search
    category, // List of category names from the DB
  }),
  applyMiddleware(sagaMiddleware, logger)
);

// Run the sagaWatcher function too listen for incoming commands
sagaMiddleware.run(watcherSaga);

// --------------------------------------------------------
// REACT function the renders the App information to the DOM
ReactDOM.render(
  // Wrap the `App` with a provider component.
  // This will allow our access to the `store` throughout the App
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

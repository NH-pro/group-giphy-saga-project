import React from 'react';

// Import the used functions / hooks
import { Route, HashRouter as Router } from 'react-router-dom';

// Import the used components
import Favorites from './Favotrites';
import Header from '../Header/Header';

function App(props) {
  return (
    <div>
      {/* Contain all App components within the <Router>, allowing for links and dynamic rendering */}
      <Router>

        <Header /> {/* Display the <Header> on all pages */}

        <Route path="/" exact>
          {/* SEARCH COMPONENT */}
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

      </Router>
    </div>
  );
}

export default App;

process.env.GIPHY_API_KEY
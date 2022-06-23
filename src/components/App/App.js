import React from 'react';

// Import the used functions / hooks
import { Route, HashRouter as Router } from 'react-router-dom';

// Import the used components
import Favorites from './Favorites';
import Header from '../Header/Header';
import Search from '../Search/Search';

function App(props) {
  return (
    <div>
      {/* Contain all App components within the <Router>, allowing for links and dynamic rendering */}
      <Router>

        <Header /> {/* Display the <Header> on all pages */}

        <Route path="/" exact>
          <Search />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

      </Router>
    </div>
  );
}

export default App;
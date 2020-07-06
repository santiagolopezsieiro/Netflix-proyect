import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'

import Main from './pages/index'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;

import  React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';

import './App.scss';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" component={Home} />
      </Router>

    </div>
  );
}

export default App;

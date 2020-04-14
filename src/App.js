import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Components/Header';
import CovidApi from './Components/CovidApi';
import Graph from './Components/Graph';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
        <Route path="/">
            <Header />
        </Route>
        <Route path="/">
            <CovidApi />
        </Route>
        <Route path="/">
            <Graph />
        </Route>
        {/*<Route path="/">*/}
        {/*    <Footer />*/}
        {/*</Route>*/}
    </Router>

          {/*<Header/>*/}

    </div>
  );
}

export default App;

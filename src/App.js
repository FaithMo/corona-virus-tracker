import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Components/Header';
import CovidApi from './Components/CovidApi';
import Graph from './Components/Graph';
import LineGraph from './Components/LineGraph';
import Footer from './Components/Footer';
import TestsConductedGraph from './Components/TestsConductedGraph';

function App() {
  return (
    <div className="App">
    <Router>
        <Route path="/">
            <Header />
        </Route>
        {/*<Route path="/">*/}
        {/*    <CovidApi />*/}
        {/*</Route>*/}

        {/*<Route path="/">*/}
        {/*    <Graph />*/}
        {/*</Route>*/}

        {/*<Route path="/">*/}
        {/*    <LineGraph/>*/}
        {/*</Route>*/}

        <Route path="/">
            <TestsConductedGraph />
        </Route>
    </Router>

          {/*<Header/>*/}

    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Searchpage from "./pages/searchPage";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" exact element ={<Searchpage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

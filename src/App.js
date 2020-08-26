import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import addLocations from "./components/addLocations";
import allLocations from "./components/allLocations";
import Home from "./components/Home";
import Footer from "./components/Footer";
import contacts from "./components/contacts";
import './style.css';
function App() {
  return (
    <BrowserRouter>
    <div className="pageContain">
    <Navbar />
    <Switch>
    <Route path='/addLocations' component={addLocations} />
    <Route path='/allLocations' component={allLocations} />
    <Route path='/contacts' component={contacts} />
    </Switch>


        <div id="bannerWrapper">
        <p className="bannerText">Welcome to Cincinnati</p>
        <img src={require('./banner.jpg')} alt=""/>
        </div>
     
     
      <Home />
      <Footer />
      </div>
      </BrowserRouter>

  )
}
export default App;

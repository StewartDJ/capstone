import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import addLocations from "./components/addLocations";
import allLocations from "./components/allLocations";
<<<<<<< HEAD
=======
import Home from "./components/Home";
import Footer from "./components/Footer";
>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b
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
<<<<<<< HEAD
    {/* <Footer/> */}
      <header className="App-header">
=======


>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b
        <div id="bannerWrapper">
        <p className="bannerText">Welcome to Cincinnati</p>
        <img src={require('./banner.jpg')} alt=""/>
        </div>
<<<<<<< HEAD
      </header>
      </div>
      </BrowserRouter>
  )
}
export default App;
=======
     
     
      <Home />
      <Footer />
      </div>
      </BrowserRouter>

  )
}
export default App;
>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import addLocations from "./components/addLocations";
import allLocations from "./components/allLocations";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import Home from "./components/Home";
import Footer from "./components/Footer";
>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b
>>>>>>> d0d09faf6f5e745d70951a0770d4e3b8d0ee4970
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
    {/* <Footer/> */}
      <header className="App-header">
<<<<<<< HEAD
=======
=======


>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b
>>>>>>> d0d09faf6f5e745d70951a0770d4e3b8d0ee4970
        <div id="bannerWrapper">
        <p className="bannerText">Welcome to Cincinnati</p>
        <img src={require('./banner.jpg')} alt=""/>
        </div>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
>>>>>>> d0d09faf6f5e745d70951a0770d4e3b8d0ee4970
      </header>
      </div>
      </BrowserRouter>
  )
}
export default App;
<<<<<<< HEAD

=======
=======
     
     
      <Home />
      <Footer />
      </div>
      </BrowserRouter>

  )
}
export default App;
>>>>>>> fff7a50b28d671e9ea370b7862d8f1134891893b
>>>>>>> d0d09faf6f5e745d70951a0770d4e3b8d0ee4970

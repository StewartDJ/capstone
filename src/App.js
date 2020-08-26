  
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar"
import addLocations from "./components/addLocations";
import allLocations from "./components/allLocations";
import contacts from "./components/contacts";
import Footer from "./components/Footer";
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
      <header className="App-header">
        <div id="bannerWrapper">
        <p className="bannerText">Welcome to Cincinnati</p>
        <img src={require('./banner.jpg')} alt=""/>
        </div>
      
      </header>
    
   

<div class="layoutTestYellow pageBody">
   

<div class="layoutTestBlue left pageBody">

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/tourist2.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>
</div>


<div class="layoutTestRed right pageBody">


<div class="imgWithText">
   

<div class="layoutElements">
    <p class="bottom-left">Words</p> 
</div>
</div>

<div class="imgWithText">
   

<div class="layoutElements">
    <img src="../react/assets/arcade.jpg" alt="arcade"/>
    <p class="bottom-left">Words</p> 
    
</div>
</div>

<div class="imgWithText">
   

<div class="layoutElements">
    <img src="../react/assets/skatepark3.jpg" alt="arcade"/>

    <p class="bottom-left">Words</p> 
</div>
</div>

<div class="imgWithText">
   

<div class="layoutElements">
    <p class="bottom-left">Words</p> 
</div>
</div>

<div class="imgWithText">
   

<div class="layoutElements">
    <p class="bottom-left">Words</p> 
</div>
</div>

<div class="imgWithText">
   

<div class="layoutElements">
    <p class="bottom-left">Words</p> 
</div>
</div>

</div>
</div>
<Footer/>

    </BrowserRouter>
</div>
</Router>
  );
}

export default App
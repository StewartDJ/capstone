import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
           
<div class="layoutTestYellow pageBody">
<div class="layoutTestBlue left pageBody">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img class="d-block w-100" src={require('../assets/tourist2.jpg')} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require('../assets/tourist3.jpg')} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"src={require('../assets/tourists4.jpg')} alt="Third slide"/>
    </div>
  </div>
</div>
</div>


<div class="layoutTestRed right pageBody">
<div class="imgWithText">
<div class="layoutElements">
<img src={require('../assets/Union2.jpg')} alt="arcade"/>
    <p class="bottom-left">VIEW</p> 
</div>
</div>
<div class="imgWithText">
<div class="layoutElements">
<img src={require('../assets/arcade.jpg')} alt="arcade"/>
    <p class="bottom-left">PLAY</p> 
</div>
</div>
<div class="imgWithText">
<div class="layoutElements">
    <img src={require('../assets/CAC3.jpg')} alt="CAC"/>
    <p class="bottom-left">ART</p> 
</div>
</div>
<div class="imgWithText">
<div class="layoutElements">
<img src={require('../assets/skatepark3.jpg')} alt="arcade"/>
    <p class="bottom-left">SKATE</p> 
</div>
</div>
<div class="imgWithText">
<div class="layoutElements">
<img src={require('../assets/otherMuseum.jpg')} alt="arcade"/>
    <p class="bottom-left">LEARN</p> 
</div>
</div>
<div class="imgWithText">
<div class="layoutElements">
<img src={require('../assets/newport1.jpg')} alt="arcade"/>
    <p class="bottom-left">SHOP</p> 
</div>
</div>
</div>
</div>
        )
    }
}


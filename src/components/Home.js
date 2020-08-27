import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


export default class Home extends Component {
    render() {
        return (
           
<div className="layoutTestYellow pageBody">

  {/* this is the change for the homepage that I Lashy have done */}
  
<header className="App-header">


<div id="bannerWrapper">
<p className="bannerText">Welcome to Cincinnati</p>
{/* <img src={require('./banner.jpg')} alt="banner"/> */}
{/* <img src={require('./assets/sky.jpg')} alt="banner"/> */}
<img src={require('../assets/sky.jpg')} alt="banner" />

</div>

</header>

{/* change end */}

  {/* <div className="divider"> </div> */}
  <h1><center> LOTS TO DO AND SEE IN CINCINNATI yada yada </center></h1>
<div className="layoutTestBlue left pageBody">


<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block" src={require('../assets/tourist2.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block" src={require('../assets/tourist3.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block"src={require('../assets/tourists4.jpg')} alt="Third slide"/>


    </div>
  </div>
  
</div>  
</div>


<div className="layoutTestRed right pageBody">
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/Union2.jpg')} alt="union"/>
    <p className="bottom-left">VIEW</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/arcade.jpg')} alt="arcade"/>
    <p className="bottom-left">PLAY</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
    <img src={require('../assets/CAC3.jpg')} alt="CAC"/>
    <p className="bottom-left">ART</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/skatepark3.jpg')} alt="arcade"/>
    <p className="bottom-left">SKATE</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/otherMuseum.jpg')} alt="arcade"/>
    <p className="bottom-left">LEARN</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/newport1.jpg')} alt="arcade"/>
    <p className="bottom-left">SHOP</p> 
    
</div>

</div>

</div>
<br/>
<h2> GENERIC TEXT</h2> 
<p className="blurb">     Lorem ipsum dolor sit, amet consectetur adipisicing elit. At optio illum aliquid nihil, et molestias provident ipsa ut dolore veritatis, inventore iste repellat accusantium! Quae facilis nisi iusto adipisci sapiente a molestias necessitatibus, molestiae culpa! Facere error perspiciatis voluptatem! Vel quasi officiis recusandae provident est sunt quas reprehenderit unde eum quod dolorum porro enim omnis consequuntur, soluta doloremque, ipsa, modi tenetur dolor ut? Facere aliquam placeat eligendi corrupti temporibus cupiditate deserunt cum, inventore recusandae sint, esse quod reprehenderit debitis sed omnis iusto explicabo cumque provident error! Perspiciatis sit at reprehenderit quidem cum nobis eveniet quasi et. Ex excepturi magni autem libero perferendis, dolor, magnam, omnis cumque incidunt fugit repellendus eos atque nulla commodi optio blanditiis dolorum nam. Quibusdam, possimus. Necessitatibus excepturi praesentium reprehenderit officia nemo fugit provident labore voluptatem laborum iusto facilis quaerat inventore sed pariatur placeat qui laboriosam explicabo magni ipsam cum, maxime vitae repudiandae possimus sint. Similique esse ratione eligendi, ut quod libero laborum, enim corrupti quae porro tempora minima nulla non. Libero beatae repudiandae vitae maxime vero suscipit ullam quia voluptas eius ea soluta nemo quo, laudantium sapiente consequuntur neque quidem commodi earum iure iusto pariatur! Doloribus voluptates molestias maxime fugiat delectus. Blanditiis deleniti, accusantium fuga error eum voluptate cum praesentium quas dolorem impedit id quod eos sunt modi voluptatibus sequi nobis ex iste rerum magnam! Tenetur illum distinctio impedit possimus placeat hic enim molestiae eius sequi quo et itaque voluptates, doloremque ea. Reiciendis fugiat consectetur ullam beatae quam ex sapiente quas dicta est culpa numquam impedit veniam, perferendis harum fugit iure, expedita assumenda ducimus ipsa dolores. Vel tempora illo eaque ad assumenda consequatur qui laudantium possimus veritatis dolorum iste aspernatur animi quam cum ducimus mollitia fugit amet sit molestiae asperiores illum, consectetur excepturi aliquam? Molestiae doloribus aspernatur maiores quo facere, necessitatibus nisi perferendis odio minima nostrum?
</p>

</div>

        )
    }
}


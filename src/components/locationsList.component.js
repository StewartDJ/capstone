import React, { Component } from 'react';
import axios from 'axios';

class LocationsList extends Component {
  state = { 
    name: ' ',
    indoors:  Boolean,
    website: '', 
    location: {
      address: "",
      city: "",
      state: "", 
      zipCode: Number,
    },
    category: ' ',
    familyFriendly: "",
    description: ' ',
    imageUrl: ' ',
    locations: [] 
  }

componentDidMount(){
  this.getLocationPost();
}

getLocationPost() {
    axios.get('http://localhost:5000/all-locations')
   .then((res) => {
     const data = res.data;
      console.log(res.data)

     this.setState({locations: data})
     console.log('data dun did got');
  })
    .catch((err) => {
      alert('error ABANDON SHIP!!!')
    });
  }

  displayLocationPosts = (locations) => {
    if (!locations.length) return null;
    return locations.map((destination, index) => {
        return(


      <div key={index} className="theLocations">
         <div className="yellowEdge"></div>
         
         <div className= "innerContents">
    
<div className="scroll">
  <div className="grid-item"><h2>{destination.name} </h2></div>
  
   <div className="grid-item">     
   {/* {this.state.location} */}
   
   {JSON.stringify(destination.location, function (key, value) {
   if (key === "city" || key === "state" || key === "address") {
   return value.toUpperCase()
    

   } else {
     return value;
   }}
   )}
     
</div> 
<br/>
  <div className="grid-item"> <p>{destination.description}</p> </div>
  <div className="grid-item">  <a href= {destination.website} target="_blank" className="btn btn-warning" rel="noopener noreferrer"> VISIT WEBSITE</a> </div>
 
</div>












      <div> 
         </div>
       
        <br />
         
</div>
<div className="imageDiv"> <img src=  {destination.imageUrl} alt="location"   /> </div>
      </div> 

      
        )
    });
  };

  render() { 
    
    return (  
      <div > 
        {this.displayLocationPosts(this.state.locations)}
         </div> 
    );
  }
}

export default LocationsList;
import React, { Component } from 'react';
import axios from 'axios';

class LocationsList extends Component {
  state = { 
    name: ' ',
    indoors:  Boolean,
    website: '', 
    location: Object,
    category: ' ',
    familyFriendly: Boolean,
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
        <h2>{destination.name} </h2>
        <p>{destination.description}</p>
        {/* <img src= {require( ' {destination.imageUrl} ' )}/> */}
        <a href= "{destination.website}"> visit website</a>
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




 // componentDidMount(){
  //           axios.get('http://localhost:5000/all-locations')
  //           .then(res => {
            
  //           console.log(res.data)
  //           this.setState({
  //           locations: res.data
  //           })
  //           })
  //        }




// class LocationsList extends Component {
//     state = { 
//         locations: []
//      }

//      componentDidMount(){
//         axios.get('http://localhost:5000/all-locations')
//         .then(res => {
        
//         console.log(res.data)
//         this.setState({
//         locations: res.data
//         })
//         })
//      }



//      displayLocationPost = (posts) => {

//           if (!posts.length) return null;
      
      
//           return locations.map((post, index) => (
            
//           ));
//         };

    
//     render( ) 
//     { 
//         return ( 
//             <div className="fdg"> 
               
//                 </div>
//         )
//     })

 














// // import React, { Component } from 'react'
// // import { Link } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';

// class LocationsList extends React.Component {

//     state = {
// name: " ",
// description: ' ',
// website: ' ',
// imageUrl: ' ',
// destination: ' ',
// address: ' ',
// city: ' ',
// destinationState: ' ',
// posts: []
//     };

//     componentDidMount = () => {
//         this.getLocationPost();
//       };
    
















// getLocationPost = () => {
//     axios.get('/all-locations')
//     .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log('data from locations has been recieved');
//     })
//     .catch((error) => {
//       console.log(error)
//         // alert('Error retrieving data!!!');
//     });
//   }
  


//   resetUserInputs = () => {
//     this.setState({
//       name: '',
//       description: ''
//     });
//   };

//   displayLocationPost = (posts) => {

//     if (!posts.length) return null;


//     return posts.map((post, index) => (
//       <div key={index} className="post__display">
//         <h3>{post.name}</h3>
//         <p>{post.description}</p>
//       </div>
//     ));
//   };

//   render() {

//     // console.log('State: ', this.state);


//     return(
     

//         <div className="display">
//           {this.displayLocationPost(this.state.posts)}
//         </div>
      
//     );
//   }
// }

// export default LocationsList;





// // export default class LocationsList extends Component {
// //     constructor(props) {
// //         super(props);

// // this.state = {touristdestinations: []};

// //     }
    
// //     componentDidMount() {
// //         axios.get('http://localhost:5000/all-locations')
// //             .then(response => {
// //             this.setState({touristdestinations: response.data})
// // })
// // .catch((error) => {
// //     console.log(error);
// // })
// // }

    
// //     render() {
// //         return (
// //             <div className="theLocations">
// //                 <h2> Placeholder </h2>
// // <p> This is where the list will be </p>

// //                 </div>
// //         )
// //     }
// // }
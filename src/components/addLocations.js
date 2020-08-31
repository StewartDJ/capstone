import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
// import e from 'express';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Button from 'react-bootstrap/button'


export default class addLocations extends Component {
    
            constructor(props) {
                super(props)
                  this.onChangeName = this.onChangeName.bind(this);
                  this.onChangeDescription = this.onChangeDescription.bind(this);
                  this.onChangeWebsite = this.onChangeWebsite.bind(this);
                  this.onChangeImageUrl = this.onChangeImageUrl.bind(this)
                  this.onChangeLocation = this.onChangeLocation.bind(this);
                  this.onChangeAddress = this.onChangeAddress.bind(this);
                  this.onChangeCity = this.onChangeCity.bind(this)
                  this.onChangeState = this.onChangeState.bind(this)
                  this.onChangeZipcode= this.onChangeZipcode.bind(this)
                  // this.onChangeIndoors = this.onChangeIndoors.bind(this)
                  // this.onChangeFamilyFriendly = this.onChangeFamilyFriendly.bind(this)
                  this.onSubmit = this.onSubmit.bind(this);
              
                  this.state = {
                    name: "",
                    description: "",
                    website: "",
                    imageUrl: "",
                    location: { },
                    indoors: [],
                    familyFriendly:[]
                  }
                
                  
                }
                ToggleButtonGroup() {
                  // const [value, setValue] = useState([1, 0]);
                }
        onChangeName(e){
        this.setState({
        name: e.target.value
        })}

        onChangeDescription(e){
        this.setState({
        description: e.target.value
        })}

        onChangeWebsite(e) {
        this.setState({
        website: e.target.value
        })}

        onChangeImageUrl(e) {
        this.setState({
        imageUrl: e.target.value
        })}

        onChangeLocation(e) {
        this.setState({
        location: e.target.value
        })}
        onChangeAddress(e){
        this.setState({
        address: e.target.value
        })}
        onChangeCity(e){
        this.setState({
        address: e.target.value
        })}
            onChangeState(e){
                this.setState({
                    state: e.target.value
                })
            }
            onChangeZipcode(e){
                this.setState({
                    zipcode: e.target.value
                })
            }
                
            
            onSubmit(e) {
                e.preventDefault();
                const newLocation  = {
                  name: this.state.username  ,
                  description: this.state.description,
                  website: this.state.website ,
                  imageUrl: this.state.imageUrl,
                  location: this.state.location,
                  address: this.state.location.address,
                  city: this.state.location.city,
                  state: this.state.location.state,
                  zipcode:this.state.location.zipcode
                }
                console.log(newLocation)

                axios.post('http://localhost:5000/addLocations/add', newLocation)
                .then((res) => {console.log(res.data)})
                  window.location = '/'
              }
             
          
  render(){
    
    return (
        <div className="container">
            <h3>Add your own Destination!</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
      <label>Destination Name</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.name}
          onChange={this.onChangeName}
        />
  </div>
  <div className="form-group">
      <label>Description</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
  </div>
  <div className="form-group">
      <label> Website </label>
        <input
        type="text"
        required
        className="form-control"
            value={this.state.website}
            onChange={this.onChangeWebsite}
            />
  </div>
  <div className="form-group">
    <label>Image Url</label>
    <input
        type="text"
        required
        className="form-control"
            value={this.state.imageUrl}
            onChange={this.onChangeImageUrl}
            />
        </div>
        <div className="form-group">
                <label>Street Address</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.location.address}
                           onChange={this.onChangeAddress}
                             />
                <label> City </label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.location.city}
                           onChange={this.onChangeCity}
                             />
                <label>State</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.location.state}
                           onChange={this.onChangeState}
                             />
                <label> Zipcode </label>
                <input
                     type="number"
                     required
                     className="form-control"
                      value={this.state.location.zipcode}
                           onChange={this.onChangeZipCode}
                             />
                            </div>
                      <div className="form-group">
                 <label>Is this an indoor destination?</label>
                 <br></br>
                 {/* const handleChange = (val) => setValue(val); */}

                    
                <ToggleButtonGroup type="radio" name="options" className="mb-2" >
              <ToggleButton variant="danger" value={1}>Yes</ToggleButton>
               <ToggleButton variant="danger" value={0}>No</ToggleButton>
               </ToggleButtonGroup>
               
                    </div>          
                <div className="form-group">  
                <label>Is this location family friendly?</label>
                <br></br>
                    
                    <ToggleButtonGroup type="radio" name="options" className="mb-2" >
                  <ToggleButton variant="danger" value={1}>Yes</ToggleButton>
                   <ToggleButton variant="danger" value={0}>No</ToggleButton>
                   </ToggleButtonGroup>
                   <br></br>
                   </div>   
                   <Button variant="danger" size="lg" block onClick={this.onSubmit}>Submit!</Button>
        </form>
        </div>
    )
    }
  }
  
       
    






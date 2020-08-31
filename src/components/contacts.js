import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

export default class contacts extends Component {
    render() {
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            date: new Date()
          }
        return (
                   
           
          
            <div className="pageContain">
                <div id="bannerWrapper">
            <img src={require('../assets/skyline.jpg')} alt="banner"/>
                 </div>
                 <div className="container ">
                     <h1 className="contactHeader"> Please fill out this brief form, if you'd like to learn more about the Queen City! </h1>
                <div className="form-group">
      <label> Name</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.name}
          onChange={this.onChangeName}
        />
  </div>
  <div className="form-group">
      <label>Email</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
  </div>
  <div className="form-group">
      <label> PhoneNumber </label>
        <input
        type="text"
        required
        className="form-control"
            value={this.state.phoneNumber}
            onChange={this.onChangephoneNumber}
            />
  </div>
             <div className="form-group">
            <label>Date:</label>
              <div>
                <DatePicker 
                selected = {this.state.date}
                onChange={this.onChangeDate}
                />
              </div>
          </div>
  
           
          </div>
            </div>
            
        )
    }
}
             

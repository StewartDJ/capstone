import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import AsyncSelect from 'react-select/async';

export default class Navbar extends Component {
state = {
    selectedLocations: []
}

onChange = selectedLocations => {
    this.setState({
        selectedLocations: selectedLocations || []
    })
}

loadOptions=async (inputText,callback) => {
const response = await fetch(`http://localhost:5000/all-locations?name_like=${inputText}`)
const json = await response.json();

callback(json.map( i => ({label:i.name, value: i.id})))
} 



render( ) {
        return (
            <div>
            <nav className="navbar navbar-light bg-warning justify-content-between navbar-expand-lg">
                <Link to="/" className="navbar-brand" > <img src={require('../assets/planeicon.png')} width="40px" alt="icon" class="icon"/>  EXPLORE CINCINNATI  </Link>
                <div className="">
                <ul className="navbar-nav mx-auto"> 
                        <li className="navbar-item">
                            <Link to="/" className="nav-link navUnderline navText">Home </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/allLocations" className="nav-link navUnderline navText">All Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/addLocations" className="nav-link navUnderline navText">Add Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/contacts" className="nav-link navUnderline navText">Contact </Link>
                            </li>
                        </ul>
            </div>


                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchName"/> 
                  
                
                  
                  <div className='locationNames'>{this.state.selectedLocations} 
                  </div>
                  <AsyncSelect
                  width = "800%"
                  isMulti
                  value={this.state.selectedLocations}
                  onChange={this.onChange}
                  placeholder={'type something'}
                  loadOptions={this.loadOptions}
                  />
                  <button className="btn btn-info buttons" type="submit">Search</button>
                </form>
                </nav>
</div>

        )
    }
}


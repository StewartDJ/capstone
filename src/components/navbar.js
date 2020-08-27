import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-lg">
                <Link to="/" className="navbar-brand" >TravelSpot</Link>
                <div className="">
                <ul className="navbar-nav mx-auto"> 
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/allLocations" className="nav-link">All Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/addLocations" className="nav-link">Add Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/contacts" className="nav-link">Contact </Link>
                            </li>
                        </ul>
</div>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
        )
    }
}
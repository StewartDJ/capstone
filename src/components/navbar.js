import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 

                <Link to="/" className="navbar-brand">Generic Travel Page Name</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto"> 
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
            </nav>
        )
    }
}


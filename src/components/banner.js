import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <div id="bannerWrapper">
            <p className="bannerText">Welcome to Cincinnati</p>
            {/* <img src={require('./banner.jpg')} alt="banner"/> */}
            <img src={require('../assets/sky.jpg')} alt="banner"/>
    
            </div>
        )
    }
}
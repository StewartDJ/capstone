import React, { Component } from 'react'


export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
    
      render() {
        const { showHideDemo1 } = this.props;
        return <>{showHideDemo1 && <div className="infoBlock">This is Demo1 component</div>}</>;
      }
    }

    
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
export default class addLocations extends Component {
    render() {
        return (
            <div>
     <h3>Add your own Destination!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Location Name </label>
            <select 
              ref="userInput"
              required
              className = "form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            >
              {
                this.state.name.map((name) => {
                  return <option
                    key={name}
                    value = {name}
                  >
                    {name}
                  </option>
                })
              }
            </select>
          </div>
          <div className="form-group">
              <label>Website</label>
                <input 
                  type="text"
                  required
                  className='form-control'
                  value={this.state.website}
                  onChange={this.onChangeWebsite}
                />
          </div>
          <div className="form-group">
              <label> Phone Number </label>
                <input
                type="text"
                className="form-control"
                    value={this.state.phoneNumber}
                    onChange={this.onChangePhoneNumber}
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
            </form>
            </div>
        )
    }
}

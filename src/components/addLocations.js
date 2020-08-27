import React from 'react'


export default function addLocations() {
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
    <label>image url</label>
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
                      value={this.state.address}
                           onChange={this.onChangeAddress}
                             />
                <label> City</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.city}
                           onChange={this.onChangeCity}
                             />
                <label> Destination State</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.destinationState}
                           onChange={this.onChangeDestinationState}
                             />
                <label> Zipcode </label>
                <input
                     type="number"
                     required
                     className="form-control"
                      value={this.state.zipCode}
                           onChange={this.onChangeZipCode}
                             />
                            </div>
                      <div className="form-group">
                 <label>Is this an indoor destination?</label>
                      </div>   
                <div className="form-group">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
              <ToggleButton value={1}>Yes</ToggleButton>
               <ToggleButton value={0}>No</ToggleButton>
               </ToggleButtonGroup>
                    </div>               




        
    </form>
        </div>
    )
}



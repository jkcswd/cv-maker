import React, {Component} from 'react'

import InputDate from './InputDate';
import InputLong from './InputLong';
import InputShort from './InputShort';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <InputShort 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="general" 
          propertyValue="name"
        />
        <InputShort 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="general" 
          propertyValue="location"
        />
        <InputShort 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="general" 
          propertyValue="mobile"
        />
        <InputShort 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="general" 
          propertyValue="email"
        />
      </div>
    )
  }
}

export default Input
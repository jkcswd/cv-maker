import React, {Component} from 'react'

import InputDate from './inputDate';
import InputLong from './inputLong';
import InputShort from './inputShort';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <InputDate handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        <InputLong handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        <InputShort 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="general" 
          propertyValue="name"
        />
      </div>
    )
  }
}

export default Input
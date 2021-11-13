import React, {Component} from 'react'

import InputLong from './InputLong';
import InputShort from './InputShort';
import InputEducation from './InputEducation';
import InputWork from './InputWork'

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
        <InputLong 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="profile" 
          propertyValue="statement"
        />
        <InputLong 
          handleChange={this.props.handleChange} 
          handleSubmit={this.props.handleSubmit} 
          inputData={this.props.inputData}  
          propertyCategory="skills" 
          propertyValue="skill"
        />
        <InputEducation
        handleChange={this.props.handleChange} 
        multiSubmit={this.props.multiSubmit}
        handleDelete={this.props.handleDelete}
        inputData={this.props.inputData}
        educationArray={this.props.educationArray}  
        />
        <InputWork
        handleChange={this.props.handleChange} 
        multiSubmit={this.props.multiSubmit}
        handleDelete={this.props.handleDelete}
        inputData={this.props.inputData}  
        experienceArray={this.props.experienceArray}
        />
      </div>
    )
  }
}

export default Input
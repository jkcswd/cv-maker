import React from 'react'

import InputLong from './InputLong';
import InputShort from './InputShort';
import InputEducation from './InputEducation';
import InputWork from './InputWork'
import '../styles/Input.css'

const Input = (props) => {
    return (
      <div className="Input">
        <div className="general-info">
          <InputShort 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit} 
            inputData={props.inputData}  
            propertyCategory="general" 
            propertyValue="name"
          />
          <InputShort 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit} 
            inputData={props.inputData}  
            propertyCategory="general" 
            propertyValue="location"
          />
          <InputShort 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit} 
            inputData={props.inputData}  
            propertyCategory="general" 
            propertyValue="mobile"
          />
          <InputShort 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit} 
            inputData={props.inputData}  
            propertyCategory="general" 
            propertyValue="email"
          />
        </div>

        <InputLong 
          handleChange={props.handleChange} 
          handleSubmit={props.handleSubmit} 
          inputData={props.inputData}  
          propertyCategory="profile" 
          propertyValue="statement"
        />
        <InputLong 
          handleChange= {props.handleChange} 
          handleSubmit={props.handleSubmit} 
          inputData={props.inputData}  
          propertyCategory="skills" 
          propertyValue="skill"
        />
        <InputEducation
        handleChange={props.handleChange} 
        multiSubmit={props.multiSubmit}
        handleDelete={props.handleDelete}
        inputData={props.inputData}
        educationArray={props.educationArray}  
        />
        <InputWork
        handleChange={props.handleChange} 
        multiSubmit={props.multiSubmit}
        handleDelete={props.handleDelete}
        inputData={props.inputData}  
        experienceArray={props.experienceArray}
        />
      </div>
    )
  }

export default Input
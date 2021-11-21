import React from 'react'

import '../styles/InputLong.css'

const InputLong = (props) => {
    return (
      <div className="InputLong">
        <form onSubmit={props.handleSubmit} data-category={props.propertyCategory} data-value={props.propertyValue}>
          <textarea 
            data-category={props.propertyCategory}
            data-value={props.propertyValue}
            value={props.inputData[props.propertyCategory][props.propertyValue].value} 
            onChange={props.handleChange} 
          />
          <input className="button" type="submit" value="Update" />
        </form>
      </div>
    )
  }

export default InputLong
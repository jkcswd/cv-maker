import React from 'react'

import '../styles/InputShort.css'

const InputShort = (props) => {
  return (
    <div className="InputShort">
        <form 
          className="input-form" 
          onSubmit={props.handleSubmit} 
          data-category={props.propertyCategory} 
          data-value={props.propertyValue}
        >
          <input 
            type="text" 
            data-category={props.propertyCategory}
            data-value={props.propertyValue}
            value={props.inputData[props.propertyCategory][props.propertyValue].value} 
            onChange={props.handleChange} 
          />
          <input 
            className="button"
            type="submit" 
            value="Update" 
          />
        </form>
      </div>
  )
}

export default InputShort

import React, {Component} from 'react'

import '../styles/InputShort.css'

class InputShort extends Component {
  render() {
    return (
      <div className="InputShort">
        <form 
          className="input-form" 
          onSubmit={this.props.handleSubmit} 
          data-category={this.props.propertyCategory} 
          data-value={this.props.propertyValue}
        >
          <input 
            type="text" 
            data-category={this.props.propertyCategory}
            data-value={this.props.propertyValue}
            value={this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value} 
            onChange={this.props.handleChange} 
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
}

export default InputShort

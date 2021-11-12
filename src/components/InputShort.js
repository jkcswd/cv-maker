import React, {Component} from 'react'

class InputShort extends Component {
  render() {
    return (
      <div className="InputShort">
        <form onSubmit={this.props.handleSubmit} data-category={this.props.propertyCategory} data-value={this.props.propertyValue}>
          <label>
            {this.props.propertyValue}
            <input 
              type="text" 
              data-category={this.props.propertyCategory}
              data-value={this.props.propertyValue}
              value={this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value} 
              onChange={this.props.handleChange} 
            />
          </label>
          <input 
            type="submit" 
            value="Update" 
          />
        </form>
      </div>
    )
  }
}

export default InputShort

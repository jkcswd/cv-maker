import React, {Component} from 'react'

class InputShort extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <label>
            {this.props.propertyValue}
            <input 
              type="text" 
              data-category="general" 
              data-value="name"
              value={this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value} 
              onChange={this.props.handleChange} 
            />
          </label>
          <input type="submit" value="Submit" onSubmit={this.props.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default InputShort

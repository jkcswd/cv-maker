import React, {Component} from 'react'

class InputShort extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <div className="Input">
        <form>
          <label>
            {this.props.propertyValue}
            <input type="text" value={this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default InputShort

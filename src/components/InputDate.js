import React, {Component} from 'react'

class InputDate extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default InputDate
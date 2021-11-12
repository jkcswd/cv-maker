import React, {Component} from 'react'
/* 
Even though InputWork and InputEducation are similar I took the decision to split them into two modules as
making a general component work with both would require a large amount of props. May refactor later.
*/

class InputEducation extends Component {
  render() {
    return (
      <div className="InputEducation">
        <form>
          <label>
            School Name:
            <input 
              type="text" 
              data-category="education"
              data-value="schoolName"
              value={this.props.inputData.education.schoolName.value} 
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Subject:
            <input 
              type="text" 
              data-category="education"
              data-value="subject"
              value={this.props.inputData.education.subject.value}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Date from:
            <input 
              data-category="education"
              data-value="date"
              type="date" 
              value={this.props.inputData.education.date.from.value}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Date to:
            <input 
              data-category="education"
              data-value="date"
              type="date" 
              value={this.props.inputData.education.date.from.value}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Summary:
            <textarea 
              data-category="education"
              data-value="summary"
              value={this.props.inputData.education.summary.value}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default InputEducation
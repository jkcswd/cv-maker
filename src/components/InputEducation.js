import React, {Component} from 'react'

class InputEducation extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <label>
            {this.props.placeName}:
            <input 
              type="text" 
              data-category={"education"}
              data-value="schoolName"
              value={this.props.inputData.education.schoolName.value} 
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            {this.props.roleOrSubject}:
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
import React, {Component} from 'react'
/* 
Even though InputWork and InputEducation are similar I took the decision to split them into two modules as
making a general component work with both would require a large amount of props. May refactor later.
*/

class InputEducation extends Component {
  render() {
    return (
      <div className="InputEducation">
        <form onSubmit={this.props.multiSubmit} data-category="education">
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
              data-value="dateFrom"
              type="date" 
              value={this.props.inputData.education.dateFrom.value}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Date to:
            <input 
              data-category="education"
              data-value="dateTo"
              type="date" 
              value={this.props.inputData.education.dateTo.value}
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
        <ul>
          {this.props.educationArray.map(item => {
            return (
              <li key={item.id}>
                {item.schoolName.value}
                <button data-category="education" data-id={item.id} onClick={this.props.handleDelete}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default InputEducation
import React, {Component} from 'react'

import '../styles/InputWork.css'

class InputWork extends Component {
  render() {
    return (
      <div className="InputWork">
        <form onSubmit={this.props.multiSubmit} data-category="experience">
          <div className="company-details">
            <input 
              type="text" 
              data-category="experience"
              data-value="name"
              value={this.props.inputData.experience.name.value} 
              onChange={this.props.handleChange}
            />
            <input 
              type="text" 
              data-category="experience"
              data-value="position"
              value={this.props.inputData.experience.position.value}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="dates">
            <label>
              From:
              <input 
                data-category="experience"
                data-value="dateFrom"
                type="date" 
                value={this.props.inputData.experience.dateFrom.value}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              To:
              <input 
                data-category="experience"
                data-value="dateTo"
                type="date" 
                value={this.props.inputData.experience.dateTo.value}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          
          <textarea 
            data-category="experience"
            data-value="jobTasks"
            value={this.props.inputData.experience.jobTasks.value}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="Add" className="add button" />
        </form>
        <ul>
          {this.props.experienceArray.map(item => {
            return (
              <li key={item.id}>
                {item.name.value}
                <button className="button" data-category="experience" data-id={item.id} onClick={this.props.handleDelete}>
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

export default InputWork
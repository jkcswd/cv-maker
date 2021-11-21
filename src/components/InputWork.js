import React from 'react'

import '../styles/InputWork.css'

const InputWork = (props) => {
    return (
      <div className="InputWork">
        <form onSubmit={props.multiSubmit} data-category="experience">
          <div className="company-details">
            <input 
              type="text" 
              data-category="experience"
              data-value="name"
              value={props.inputData.experience.name.value} 
              onChange={props.handleChange}
            />
            <input 
              type="text" 
              data-category="experience"
              data-value="position"
              value={props.inputData.experience.position.value}
              onChange={props.handleChange}
            />
          </div>
          <div className="dates">
            <label>
              From:
              <input 
                data-category="experience"
                data-value="dateFrom"
                type="date" 
                value={props.inputData.experience.dateFrom.value}
                onChange={props.handleChange}
              />
            </label>
            <label>
              To:
              <input 
                data-category="experience"
                data-value="dateTo"
                type="date" 
                value={props.inputData.experience.dateTo.value}
                onChange={props.handleChange}
              />
            </label>
          </div>
          
          <textarea 
            data-category="experience"
            data-value="jobTasks"
            value={props.inputData.experience.jobTasks.value}
            onChange={props.handleChange}
          />
          <input type="submit" value="Add" className="add button" />
        </form>
        <ul>
          {props.experienceArray.map(item => {
            return (
              <li key={item.id}>
                {item.name.value}
                <button className="button" data-category="experience" data-id={item.id} onClick={props.handleDelete}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

export default InputWork
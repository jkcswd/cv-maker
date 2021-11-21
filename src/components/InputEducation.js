import React from 'react'

import '../styles/InputEducation.css'
/* 
Even though InputWork and InputEducation are similar I took the decision to split them into two modules as
making a general component work with both would require a large amount of props. May refactor later.
*/

const InputEducation = (props) => {
    return (
      <div className="InputEducation">
        <form onSubmit={props.multiSubmit} data-category="education">
          <div className="school-subject">
            <input 
              type="text" 
              data-category="education"
              data-value="schoolName"
              value={props.inputData.education.schoolName.value} 
              onChange={props.handleChange}
            />
            <input 
              type="text" 
              data-category="education"
              data-value="subject"
              value={props.inputData.education.subject.value}
              onChange={props.handleChange}
            />
          </div>    
          <div className="dates">
            <label>
              From:
              <input 
                data-category="education"
                data-value="dateFrom"
                type="date" 
                value={props.inputData.education.dateFrom.value}
                onChange={props.handleChange}
              />
            </label>
            <label>
              To:
              <input 
                data-category="education"
                data-value="dateTo"
                type="date" 
                value={props.inputData.education.dateTo.value}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <textarea 
            data-category="education"
            data-value="summary"
            value={props.inputData.education.summary.value}
            onChange={props.handleChange}
          />
          <input type="submit" value="Add" className="add button" />
        </form>
        <ul>
          {props.educationArray.map(item => {
            return (
              <li key={item.id}>
                {item.schoolName.value}
                <button className="button" data-category="education" data-id={item.id} onClick={props.handleDelete}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

export default InputEducation
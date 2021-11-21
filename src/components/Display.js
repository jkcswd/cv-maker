import React from "react";

import '../styles/Display.css'

const Display = (props) => {
    return (
      <div className="Display">
        <div className="general">
          <h1>{props.cvData.general.name.value}</h1>
          <p>
            <strong>Location:</strong> {props.cvData.general.location.value} 
            |<strong>Mobile:</strong>  {props.cvData.general.mobile.value}
            |<strong>Email:</strong> {props.cvData.general.email.value}
          </p>
        </div>

        <div className="profile">
          <h2>Personal Profile</h2>
          <p>{props.cvData.profile.statement.value}</p>
        </div>

        <div className="experience">
          <h2>Work Experience</h2>
          <ul>
            {props.cvData.experience.map(job => {
              return (
                <li key={job.id}>
                  <h4>{job.name.value}</h4>
                  <h5>{job.position.value} ({job.dateFrom.value} to {job.dateTo.value})</h5>
                  <p>{job.jobTasks.value}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="education">
          <h2>Education</h2>
          <ul>
            {props.cvData.education.map(item => {
              return (
                <li key={item.id}>
                  <h4>{item.schoolName.value}</h4>
                  <h5>{item.subject.value} ({item.dateFrom.value} to {item.dateTo.value})</h5>
                  <p>{item.summary.value}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="about">
          <h2>Skills and Languages</h2>
          <p>{props.cvData.skills.skill.value}</p>
        </div>

      </div>
    )
  }

export default Display
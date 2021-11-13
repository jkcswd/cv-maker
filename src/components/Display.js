import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="Display">

        <div className="general">
          <h1>{this.props.cvData.general.name.value}</h1>
          <p>
            <strong>Location:</strong> {this.props.cvData.general.location.value} 
            |<strong>Mobile:</strong>  {this.props.cvData.general.mobile.value}
            |<strong>email:</strong> {this.props.cvData.general.email.value}
          </p>
        </div>

        <div className="profile">
          <h2>Personal Profile</h2>
          <p>{this.props.cvData.profile.statement.value}</p>
        </div>

        <div className="experience">
          <h2>Work Experience</h2>
          <ul>
            {this.props.cvData.experience.map(job => {
              return (
                <li key={job.id}>
                  <h4>{job.name.value} ({job.date.from.value}-{job.date.to.value})</h4><h5>{job.position.value}</h5>
                  <p>{job.jobTasks.value}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="education">
          <h2>Education</h2>
          <ul>
            {this.props.cvData.education.map(item => {
              return (
                <li key={item.id}>
                  <h4>{item.schoolName.value} ({item.date.from.value}-{item.date.to.value})</h4><h5>{item.subject.value}</h5>
                  <p>{item.summary.value}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="about">
          <h2>Skills and Languages</h2>
          <p>{this.props.cvData.skills.skill.value}</p>
        </div>

      </div>
    )
  }
}

export default Display
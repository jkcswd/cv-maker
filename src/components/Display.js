import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="Display">

        <div className="general">
          <h1>{this.props.cvData.general.name.value}</h1>
          <p>
            <strong>Location:</strong> {this.props.cvData.general.location.value} 
            | <strong>Mobile:</strong>  {this.props.cvData.general.mobile.value}
            | <strong>email:</strong> {this.props.cvData.general.email.value} |
          </p>
        </div>

        <div className="profile">
          <h2>Personal Profile</h2>
          <p>{this.props.cvData.profile.statement.value}</p>
        </div>

        <div className="experience">
          <h2>Work Experience</h2>
          <p>{this.props.experience}</p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <p>{this.props.education}</p>
        </div>

        <div className="about">
          <h2>Skills and Languages</h2>
          <p>{this.props.skills}</p>
        </div>

      </div>
    )
  }
}

export default Display
import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="Display">

        <div className="general">
          <h1>{this.props.cvData.general.name}</h1>
          <p>
            <strong>Location:</strong> {this.props.location} | <strong>Mobile:</strong>  {this.props.mobile}| <strong>email:</strong> {this.props.email} |
          </p>
        </div>

        <div className="profile">
          <h2>Personal Profile</h2>
          <p>{this.props.profile}</p>
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
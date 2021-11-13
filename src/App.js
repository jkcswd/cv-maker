import React, { Component } from 'react';
import uniqid from 'uniqid'

import './App.css';
import Display from './components/Display';
import Input from './components/Input';


class App extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.multiSubmit = this.multiSubmit.bind(this)
    this.dateChange = this.dateChange.bind(this)

    this.state = {
      inputs: {
        general: {
          name:{
            value:''
          },
          location:{
            value:''
          },
          mobile:{
            value:''
          },
          email:{
            value:''
          }
        },
        profile:{
          statement:{
            value:''
          }
        },
        experience:{
          id: uniqid(),
          name:{
            value:''
          },
          position:{
            value:''
          },
          jobTasks:{
            value:''
          },
          date:{
            to:{
              value:''
            },
            from:{
              value:''
            }
          }
        },
        education:{
          id:uniqid(),
          schoolName:{
            value:''
          },
          subject:{
            value:''
          },
          date:{
            to:{
              value:''
            },
            from:{
              value:''
            }
          },
          summary: {
            value:''
          }
        },
        skills: {
          skill:{
            value:''
          }
        }
      },
      cvData: {
        general:{
          name:{
            value:''
          },
          location:{
            value:''
          },
          mobile:{
            value:''
          },
          email:{
            value:''
          }
        },
        profile:{
          statement:{
            value:''
          }
        },
        experience:[],
        education:[],
        skills: {
          skill:{
            value:''
          }
        }
      }
    };
  }

  handleChange = (e) => {
    // Use data-attributes so handleChange can be used for modifying any state property. 
    this.setState({
      inputs:{
        ...this.state.inputs,
        [e.target.dataset.category]: {
          ...this.state.inputs[e.target.dataset.category],
          [e.target.dataset.value]: {
            value:e.target.value,
            id: this.state.inputs[e.target.dataset.category][e.target.dataset.value].id
          }  
        }
      }
    })
  }

  dateChange = e => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      cvData: {
        ...this.state.cvData,
        [e.target.dataset.category]:{
          ...this.state.cvData[e.target.dataset.category],
          [e.target.dataset.value]:{
            value:(this.state.inputs[e.target.dataset.category][e.target.dataset.value].value),
            id:(this.state.inputs[e.target.dataset.category][e.target.dataset.value].id)
          }
        }
      }
    })
  }

  multiSubmit = (e) => {
    e.preventDefault()
    if (e.target.dataset.category === "education") {
      this.setState({
        cvData:{
          ...this.state.cvData,
          education:this.state.cvData.education.concat(
            this.state.inputs.education
          )
        },
        inputs:{
          ...this.state.inputs,
          education:{
            id: uniqid(),
            schoolName:{
              value:''
            },
            subject:{
              value:''
            },
            date:{
              to:{
                value:'',
              },
              from:{
                value:'',
              }
            },
            summary: {
              value:'',
            }
          }
        }
      })
    } else if (e.target.dataset.category === "experience") {
      this.setState({
        cvData:{
          ...this.state.cvData,
          experience:this.state.cvData.experience.concat(
            this.state.inputs.experience
          )
        },
        inputs:{
          ...this.state.inputs,
          experience:{
            id: uniqid(),
            name:{
              value:''
            },
            position:{
              value:''
            },
            date:{
              to:{
                value:''
              },
              from:{
                value:''
              }
            },
            jobTasks: {
              value:''
            }
          }
        }
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Input 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          multiSubmit={this.multiSubmit}
          inputData={this.state.inputs} 
          className="Input"
        />
        <Display cvData={this.state.cvData} className="Display"/>
      </div>
    );
  }
}

export default App;

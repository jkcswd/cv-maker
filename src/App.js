import React, { Component } from 'react';
import uniqid from 'uniqid'

import './App.css';
import Display from './components/Display';
import Input from './components/input';


class App extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      inputs: {
        general: {
          name:{
            value:'',
            id: uniqid()
          },
          location:{
            value:'',
            id: uniqid()
          },
          mobile:{
            value:'',
            id: uniqid()
          },
          email:{
            value:'',
            id: uniqid()
          }
        },
        profile:{
          statement:{
            value:'',
            id: uniqid()
          }
        },
        experience:{
          company:{
            name:{
              value:'',
              id: uniqid()
            },
            position:{
              value:'',
              id: uniqid()
            },
            jobTasks:{
              value:'',
              id: uniqid()
            },
            date:{
              to:{
                value:'',
                id: uniqid()
              },
              from:{
                value:'',
                id: uniqid()
              }
            }
          }
        },
        education:{
          institution:{
            schoolName:{
              value:'',
              id: uniqid()
            },
            subject:{
              value:'',
              id: uniqid()
            },
            date:{
              to:{
                value:'',
                id: uniqid()
              },
              from:{
                value:'',
                id: uniqid()
              }
            }
          }
        },
        skills: {
          skill:{
            value:'',
            id: uniqid()
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
        experience:{
          company:{
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
          }
        },
        education:{
          institution:{
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
            }
          }
        },
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

  render(){
    return (
      <div className="App">
        <Input handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputData={this.state.inputs}/>
        <Display cvData={this.state.cvData}/>
      </div>
    );
  }
}

export default App;

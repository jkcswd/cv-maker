import React, { Component } from 'react';
import uniqid from 'uniqid'

import './App.css';
import Display from './components/Display';
import Input from './components/input';


class App extends Component{
  constructor(props) {
    super(props);

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
        general:{},
        profile:{},
        experience:{},
        education:{},
        skills: {}
      }
    }
  }

  render(){
    return (
      <div className="App">
        <Input/>
        <Display stateData={this.state}/>
      </div>
    );
  }
}

export default App;

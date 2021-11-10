import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import uniqid from 'uniqid'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        general: {
          name:{
            value:'',
            id: uniqid()
          } 
        }
      },
      cvData: {
        general:{},
        education:{},
        

      }
    }
  }
  render(){
    return (
      <div className="App">
        <Display name="James S" location="London" mobile="000000000" email="blaah@gmail.com" tagline="Does this work?" profile="Will this app work please" />
      </div>
    );
  }
  
}

export default App;

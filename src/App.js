import React, { useState } from 'react';
import uniqid from 'uniqid'

import './App.css';
import Display from './components/Display';
import Input from './components/Input';


const App = (props) => {

  const [inputs, setInputs] = useState({
    inputs: {
      general: {
        name:{
          value:'Name'
        },
        location:{
          value:'Location'
        },
        mobile:{
          value:'Mobile Number'
        },
        email:{
          value:'Email Address'
        }
      },
      profile:{
        statement:{
          value:'Write your personal statement here.'
        }
      },
      experience:{
        id: uniqid(),
        name:{
          value:'Company Name'
        },
        position:{
          value:'Job Title'
        },
        jobTasks:{
          value:'Job Description'
        },
        dateFrom:{
            value:''
        },
        dateTo:{
          value:''
        }
      },
      education:{
        id:uniqid(),
        schoolName:{
          value:'School Name'
        },
        subject:{
          value:'Subject'
        },
        dateFrom:{
          value:''
        },
        dateTo:{
          value:''
        },
        summary: {
          value:'Summary'
        }
      },
      skills: {
        skill:{
          value:'Write your skills and languages here.'
        }
      }
    },
  });

  const [cvData, setCvData] = useState({
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
  });

  const handleChange = (e) => {
    // Use data-attributes so handleChange can be used for modifying any state property. 
    setInputs({
      inputs:{
        ...inputs.inputs,
        [e.target.dataset.category]: {
          ...inputs.inputs[e.target.dataset.category],
          [e.target.dataset.value]: {
            value:e.target.value
          }  
        }
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({
      cvData: {
        ...cvData.cvData,
        [e.target.dataset.category]:{
          ...cvData.cvData[e.target.dataset.category],
          [e.target.dataset.value]:{
            value:(inputs.inputs[e.target.dataset.category][e.target.dataset.value].value)
          }
        }
      }
    });
  }

  const handleDelete = (e) => {
    setCvData({
      cvData:{
        ...cvData.cvData,
        [e.target.dataset.category]: cvData.cvData[e.target.dataset.category].filter(item => {
          return item.id !== e.target.dataset.id
        })
      }
    });
  }

  const multiSubmit = (e) => {
    e.preventDefault()
    if (e.target.dataset.category === "education") {
      setCvData({
        cvData:{
          ...cvData.cvData,
          education:cvData.cvData.education.concat(
            inputs.inputs.education
          )
        }
      });
      setInputs({
        inputs:{
          ...inputs.inputs,
          education:{
            id: uniqid(),
            schoolName:{
              value:'School Name'
            },
            subject:{
              value:'Subject'
            },
            dateFrom:{
              value:''
            },
            dateTo:{
              value:''
            },
            summary: {
              value:'Summary',
            }
          }
        }
      });
    } else if (e.target.dataset.category === "experience") {
      setCvData({
        cvData:{
          ...cvData.cvData,
          experience:cvData.cvData.experience.concat(inputs.inputs.experience)
        }
      });
        setInputs({
          inputs:{
            ...inputs.inputs,
            experience:{
              id: uniqid(),
              name:{
                value:'Company Name'
              },
              position:{
                value:'Job Title'
              },
              dateFrom:{
                value:''
              },
              dateTo:{
                value:''
              },
              jobTasks: {
                value:'Job Description'
              }
            }
          }
        }) 
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="App">
      <header> 
        <div>CV-Maker</div>  
        <button onClick={handlePrint} className="button">
          <h2>Print CV</h2>
          <p>For PDF select "Save to PDF"</p> 
          <p>Set margins to "None"</p>
        </button>
      </header>

      <main>
        <Input 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          multiSubmit={multiSubmit}
          handleDelete={handleDelete}
          inputData={inputs.inputs} 
          educationArray={cvData.cvData.education}
          experienceArray={cvData.cvData.experience}
          className="Input"
        />
        <Display cvData={cvData.cvData} className="Display"/>
      </main>

      <footer>Made by James Spencer</footer>
      
    </div>
  );
}


export default App;

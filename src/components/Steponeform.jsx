import React, { useState } from "react";
import "./Stepone.css";
const FormStep1 = ( {onNext}) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [client, setClient] = useState('');
    const [contractor, setContractor] = useState('');
    const handleNext = (event) => {
        event.preventDefault();
        onNext({
          projectName,
          projectDescription,
          client,
          contractor,
        });
      };
  
    
  
    return (
      <div className="container">
        <h2 className="h2">Step 1</h2>
        <label>Project Name:</label>
        <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}  required/>
        <label>Project Description:</label>
        <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}  required />
        <label>Client:</label>
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)}  required/>
        <label>Contractor:</label>
        <input type="text" value={contractor} onChange={(e) => setContractor(e.target.value)}  required />
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  export default FormStep1;
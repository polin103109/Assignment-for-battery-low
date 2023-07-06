import React, { useState } from "react";
import "./Stepone.css";
const FormStep1 = ( {onNext}) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [client, setClient] = useState('');
    const [contractor, setContractor] = useState('');
    const handleNext = () => {
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
        <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <label>Project Description:</label>
        <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
        <label>Client:</label>
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)} />
        <label>Contractor:</label>
        <input type="text" value={contractor} onChange={(e) => setContractor(e.target.value)} />
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  export default FormStep1;
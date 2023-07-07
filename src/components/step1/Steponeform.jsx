import React, { useState } from "react";
import "./Stepone.css";
const FormStep1 = ( {onNext}) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [client, setClient] = useState('');
    const [contractor, setContractor] = useState('');
    const [formErrors, setFormErrors] = useState({
        projectName: '',
        projectDescription: '',
        client: '',
        contractor: '',
      });
    const handleNext = (event) => {
        event.preventDefault();
        const newFormErrors = {};

    if (!projectName.trim()) {
      newFormErrors.projectName = "Project Name is required";
    }
    if (!projectDescription.trim()) {
      newFormErrors.projectDescription = "Project Description is required";
    }
    if (!client.trim()) {
      newFormErrors.client = "Client is required";
    }
    if (!contractor.trim()) {
      newFormErrors.contractor = "Contractor is required";
    }

    if (Object.keys(newFormErrors).length === 0) {
      onNext({
        projectName,
        projectDescription,
        client,
        contractor,
      });
    } else {
      setFormErrors(newFormErrors);
    }
  };
        
return (
      <div className="container">
        <h2 className="h2">Step 1</h2>
        <label>Project Name:</label>
        <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}  required/>
        {formErrors.projectName && (
        <p className="error">{formErrors.projectName}</p>
      )}
      
        <label>Project Description:</label>
        <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}  required />
        {formErrors.projectDescription && (
        <p className="error">{formErrors.projectDescription}</p>
      )}
        <label>Client:</label>
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)}  required/>
        {formErrors.client && <p className="error">{formErrors.client}</p>}
        <label>Contractor:</label>
        <input type="text" value={contractor} onChange={(e) => setContractor(e.target.value)}  required />
        {formErrors.contractor && (
        <p className="error">{formErrors.contractor}</p>
      )}
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  export default FormStep1;
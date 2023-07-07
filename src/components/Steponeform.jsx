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
        if (!projectName.trim()) {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              projectName: 'Project Name is required',
            }));
            return;
          }
          if (!projectDescription.trim()) {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              projectDescription: 'Project Description is required',
            }));
            return;
          }
          if (!client.trim()) {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              client: 'Client is required',
            }));
            return;
          }
          if (!contractor.trim()) {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              contractor: 'Contractor is required',
            }));
            return;
          }
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
        {formErrors.projectName && <p className="error">{formErrors.projectName}</p>}
        <label>Project Description:</label>
        <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}  required />
        {formErrors.projectDescription && <p className="error">{formErrors.projectDescription}</p>}
        <label>Client:</label>
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)}  required/>
        {formErrors.client && <p className="error">{formErrors.client}</p>}
        <label>Contractor:</label>
        <input type="text" value={contractor} onChange={(e) => setContractor(e.target.value)}  required />
        {formErrors.contractor && <p className="error">{formErrors.contractor}</p>}
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  export default FormStep1;
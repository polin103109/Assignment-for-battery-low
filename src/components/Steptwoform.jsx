import React, { useState } from "react";
const FormStep2 = ({data}) => {
    const [file, setFile] = useState(null);
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');
const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    // Read the CSV file and extract values
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result;
      // Parse and process the CSV data to get max/min values for X, Y, Z
      // ...
      // Set the calculated values
      setMaxX(/* calculated maxX value */);
      setMinX(/* calculated minX value */);
      setMaxY(/* calculated maxY value */);
      setMinY(/* calculated minY value */);
      setMaxZ(/* calculated maxZ value */);
      setMinZ(/* calculated minZ value */);
    };
    reader.readAsText(uploadedFile);
}



return (
<div>
<h2>Step 2</h2>
<p>Project Name: {data.projectName}</p>
<p>Project Description: {data.projectDescription}</p>
<p>Client: {data.client}</p>
<p>Contractor: {data.contractor}</p>
<input type="file" accept=".csv" onChange={handleFileUpload} />
<label>Max X:</label>
<input type="number" value={maxX} onChange={(e) => setMaxX(e.target.value)} />
<label>Min X:</label>
<input type="number" value={minX} onChange={(e) => setMinX(e.target.value)} />
<label>Max Y:</label>
<input type="number" value={maxY} onChange={(e) => setMaxY(e.target.value)} />
<label>Min Y:</label>
<input type="number" value={minY} onChange={(e) => setMinY(e.target.value)} />
<label>Max Z:</label>
<input type="number" value={maxZ} onChange={(e) => setMaxZ(e.target.value)} />
<label>Min Z:</label>
<input type="number" value={minZ} onChange={(e) => setMinZ(e.target.value)} />
   </div>
    );
}
export default FormStep2;
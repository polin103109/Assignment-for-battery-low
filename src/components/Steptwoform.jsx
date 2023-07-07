import  React, { useState } from 'react';

const FormStep2 = ({ formData, handleChange,values, onUpload,onBack }) => {
  const [csvData, setCsvData] = useState(null); // Store the CSV data
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;
      setCsvData(csvText);
      const lines = csvText.split('\n');
      const columnXValues = lines
        .slice(1) // Skip header row
        .map((line) => line.split(',')[1]) // Assuming X values are in the second column (index 1)
        .filter((x) => !isNaN(x)) // Filter out non-numeric values
        .map(parseFloat);
        const columnYValues = lines
        .slice(1) 
        .map((line) => line.split(',')[2]) 
        .filter((y) => !isNaN(y)) 
        .map(parseFloat);
        const columnZValues = lines
        .slice(1) 
        .map((line) => line.split(',')[3]) 
        .filter((z) => !isNaN(z)) 
        .map(parseFloat);
      const maxXValue = Math.max(...columnXValues);
      const minXValue = Math.min(...columnXValues);
      const maxYValue = Math.max(...columnYValues);
      const minYValue = Math.min(...columnYValues);
      const maxZValue = Math.max(...columnZValues);
      const minZValue = Math.min(...columnZValues);
      setMaxX(maxXValue);
      setMinX(minXValue);
      setMaxY(maxYValue);
      setMinY(minYValue);
      setMaxZ(maxZValue);
      setMinZ(minZValue);
    };

    reader.readAsText(file);
  };
  const handleNext = () => {
    onUpload({
      ...values,
      maxX,
      minX,
      maxY,
      minY,
      maxZ,
      minZ,
      csvData,
    });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h2>Step 2: Additional Details and File Upload</h2>
      {/* Display input values from Step 1 */}
      {/* <p>Project Name: {formData.projectName}</p> */}
      {/* Repeat the above pattern for other input values */}
      <input type="file" onChange={handleFileUpload} />
      <label>
      Max X:
        <input
          type="number"
          value={maxX}
        />
      </label>
      <label>
      Min X:
        <input
          type="number"
          value={minX}
        />
      </label>
      <label>
      Max Y:
        <input
          type="number"
          value={maxY}
        />
      </label>
      <label>
      Min Y:
        <input
          type="number"
          value={minY}
        />
      </label>
      <label>
      Max Z :
        <input
          type="number"
          value={maxZ}
        />
      </label>
      <label>
      Min Z :
        <input
          type="number"
          value={minZ}
        />
      </label>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
   
    </div>
  );
};

export default FormStep2;
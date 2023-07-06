import React, { useState } from 'react';
import { parse } from 'papaparse';

const FormStep2 = ({ values, onUpload, onBack }) => {
  const [csvFile, setCsvFile] = useState(null);
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);

    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
  };

  const handleFileRead = (event) => {
    const csvData = event.target.result;
    const parsedData = parse(csvData, { header: true });

    if (parsedData && parsedData.data && parsedData.data.length > 0) {
      const { data } = parsedData;
      const maxX = Math.max(...data.map((row) => parseFloat(row.X)));
      const minX = Math.min(...data.map((row) => parseFloat(row.X)));
      const maxY = Math.max(...data.map((row) => parseFloat(row.Y)));
      const minY = Math.min(...data.map((row) => parseFloat(row.Y)));
      const maxZ = Math.max(...data.map((row) => parseFloat(row.Z)));
      const minZ = Math.min(...data.map((row) => parseFloat(row.Z)));

      setMaxX(maxX);
      setMinX(minX);
      setMaxY(maxY);
      setMinY(minY);
      setMaxZ(maxZ);
      setMinZ(minZ);
    }
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
      csvFile,
    });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h2>Step 2: Upload CSV and Set Min/Max Values</h2>
      <p>Project Name: {values.projectName}</p>
      {/* Display the other input values from step one */}
      <input type="file" onChange={handleUpload} />
      <label>
        Max X:
        <input
          type="number"
          value={maxX}
          onChange={(e) => setMaxX(e.target.value)}
        />
      </label>
      <label>
        Min X:
        <input
          type="number"
          value={  minX}
          onChange={(e) => setMinX(e.target.value)}
        />
      </label>
      <label>
        Max Y:
        <input
          type="number"
          value={maxY}
          onChange={(e) =>  setMaxY(e.target.value)}
        />
      </label>
      <label>
      Min Y:
        <input
          type="number"
          value={ minY}
          onChange={(e) =>  setMinY(e.target.value)}
        />
      </label>
      <label>
      Min Y:
        <input
          type="number"
          value={ minY}
          onChange={(e) =>  setMinY(e.target.value)}
        />
      </label>
      <label>
      Max Z:
        <input
          type="number"
          value={ maxZ}
          onChange={(e) =>  setMaxZ(e.target.value)}
        />
      </label>
      <label>
      Min Z:
        <input
          type="number"
          value={  minZ}
          onChange={(e) =>  setMinZ(e.target.value)}
        />
      </label>

      {/* Add similar input fields for Min X, Max Y, Min Y, Max Z, and Min Z */}
      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default FormStep2;
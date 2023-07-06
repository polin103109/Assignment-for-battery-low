import React from 'react';

const ResultPage = ({ values }) => {
  return (
    <div>
      <h2>Result Page</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Name</td>
            <td>{values.projectName}</td>
          </tr>
          <tr>
            <td>Project Description</td>
            <td>{values.projectName}</td>
          </tr>
          {/* Display the other input values */}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;

import React, { useState } from "react";
import jsPDF from "jspdf";
import Formstep1 from "./components/Steponeform.jsx";
import FormStep2 from "./components/Steptwoform.jsx";
import ResultPage from "./components/Resultpage.jsx";

// import { saveAs } from "file-saver";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleNextStep = (data) => {
    setFormData(data);
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleGeneratePDF = () => {
    // Generate PDF using formData and save it
    // You'll need a library like jsPDF to generate the PDF
    // Example code using jsPDF:
    // import jsPDF from 'jspdf';
    // const doc = new jsPDF();
    // doc.text(`Project Name: ${formData.projectName}`, 10, 10);
    // ...
    // doc.save('result.pdf');

    // For now, we'll simulate the PDF download by setting a flag
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`Project Name: ${formData.projectName}`, 10, 10);
    doc.text(`Project Description: ${formData.projectDescription}`, 10, 20);
    doc.text(`Client: ${formData.client}`, 10, 30);
    doc.text(`Contractor: ${formData.contractor}`, 10, 40);
    doc.text(`Max X: ${formData.maxX}`, 10, 50);
    doc.text(`Min X: ${formData.minX}`, 10, 60);
    doc.text(`Max Y: ${formData.maxY}`, 10, 70);
    doc.text(`Min Y: ${formData.minY}`, 10, 80);
    doc.text(`Max Z: ${formData.maxZ}`, 10, 90);
    doc.text(`Min Z: ${formData.minZ}`, 10, 100);

    doc.save("result.pdf");
    setPdfGenerated(true);
  };

  return (
    <div>
      {step === 1 && <Formstep1 onNext={handleNextStep} />}
      {step === 2 && (
        <FormStep2
          values={formData}
          onUpload={handleNextStep}
          onBack={handlePrevStep}
        />
      )}
      {step === 3 && (
        <>
          <ResultPage values={formData} />
          {!pdfGenerated && (
            <button onClick={handleGeneratePDF}>Download as PDF</button>
          )}
        </>
      )}
    </div>
  );
};

export default App;

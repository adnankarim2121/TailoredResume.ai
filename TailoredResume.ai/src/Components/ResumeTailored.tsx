import React, { useState } from 'react';
import '../css/ResumeTailored.css'

const ResumeTailored: React.FC = () => {
  const [currentCV, setCurrentCV] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div className="resume-tailored">
      <textarea
        value={currentCV}
        onChange={(e) => setCurrentCV(e.target.value)}
        placeholder="Paste your CV Here"
        className="resume-textarea"
      />
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the JD Here"
        className="resume-textarea"
      />
    </div>
  );
};

export default ResumeTailored;
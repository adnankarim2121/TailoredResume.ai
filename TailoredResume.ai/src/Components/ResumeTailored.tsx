import React, { useState } from 'react';
import '../css/ResumeTailored.css'
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import SubmitButton from './SubmitButton';

const ResumeTailored: React.FC = () => {
  const [currentCV, setCurrentCV] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [markdownValue, setMarkdownValue] = useState<string | undefined>('');

  const GenerateNewResume = async() =>
  {
    //To-do
    //Send to Django back end. 
    //Process value back to react
    //set markdown value.
    try {
        const response = await axios.post('http://localhost:8000/TailoredResumeApp/generate_new_resume/', {
          CV: currentCV,
          JD: jobDescription
        });
        console.log(response.data);
        setMarkdownValue(response.data["output"])
      } catch (error) {
        console.error(error);
      }
  }

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
      <MDEditor
        value={markdownValue}
        onChange={setMarkdownValue}
      />
      <MDEditor.Markdown source={markdownValue} style={{ whiteSpace: 'pre-wrap' }} />
      <SubmitButton onClick={GenerateNewResume}> Generate </SubmitButton>
    </div>
  );
};

export default ResumeTailored;
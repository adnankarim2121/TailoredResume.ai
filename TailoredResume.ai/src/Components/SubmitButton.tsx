import React from 'react';
import '../css/ResumeTailored.css'; 

const SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="submit-button" {...props} />
  );
};

export default SubmitButton;

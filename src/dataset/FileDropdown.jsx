import React, { useState } from 'react';

const FileDropdown = ({ files, onSelectFile }) => {
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.value;
    setSelectedFile(selectedFile);
    onSelectFile(selectedFile); // Pass selected file to parent component
  };

  return (
    <div>
      <label htmlFor="file-dropdown">Select a file:</label>
      <select id="file-dropdown" value={selectedFile} onChange={handleFileChange}>
        <option value="">Select a file</option>
        {files.map((file, index) => (
          <option key={index} value={file}>
            {file}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FileDropdown;

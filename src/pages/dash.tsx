// components/FileUpload.tsx

import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const FileUpload: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; order: number }[]
  >([]);
  const [filePaths, setFilePaths] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray: File[] = Array.from(event.target.files);
      // Map files to include order of selection
      const filesWithOrder = filesArray.map((file, index) => ({
        file,
        order: index,
      }));
      setSelectedFiles(filesWithOrder);
    }
  };

  const handleSubmit = async () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("files", selectedFiles[i].file);
      }
      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Files uploaded successfully");
        // Capture the returned file paths
        setFilePaths(response.data.filePaths);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  const handleDeleteFiles = async () => {
    try {
      await axios.post("/api/deleteFiles", { filePaths });
      console.log("Files deleted successfully");
      setFilePaths([]);
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      <button onClick={handleDeleteFiles}>Delete Uploaded Files</button>
      {filePaths.length > 0 && (
        <div>
          <h2>Uploaded Files:</h2>
          <ul>
            {filePaths.map((path, index) => (
              <li key={index}>{path}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

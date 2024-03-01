// components/FileUpload.tsx

import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles) {
      const formData = new FormData();
      Array.from(selectedFiles).forEach((file) => {
        formData.append("files", file);
      });
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Upload successful, folder name:", data.folderName);
        } else {
          console.error("Upload failed");
        }
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button
        onClick={() => console.log("Uploaded function here") /*handleUpload*/}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;

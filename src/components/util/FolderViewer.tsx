import { useEffect, useState } from "react";

const FolderViewer = () => {
  const [folderContents, setFolderContents] = useState<string[]>([]);

  useEffect(() => {
    const fetchFolderContents = async () => {
      try {
        // Fetch the list of files from the /public/assets/ directory
        const response = await fetch("/api/getUploads");
        if (!response.ok) {
          throw new Error("Failed to fetch folder contents");
        }
        const files = await response.json();
        setFolderContents(files);
      } catch (error) {
        console.error("Error reading folder:", error);
      }
    };

    fetchFolderContents();

    return () => {}; // Cleanup function
  }, []);

  return (
    <div>
      <h1>Folder Contents</h1>
      <ul>
        {folderContents.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderViewer;

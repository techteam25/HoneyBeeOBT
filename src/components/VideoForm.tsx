// components/VideoForm.tsx
import React, { useState } from "react";

interface VideoFormProps {
  onSubmit: (file: File, duration: number) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ onSubmit }) => {
  const [file, setFile] = useState<File | null>(null);
  const [duration, setDuration] = useState<number>(10); // Default duration 10 seconds

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      onSubmit(file, duration);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Select an image:</label>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration (in seconds):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <button type="submit">Create Video</button>
    </form>
  );
};

export default VideoForm;

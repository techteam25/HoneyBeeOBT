import React, { useState } from "react";

interface AudioFile {
  id: number;
  file: File;
}

const AudioUploader: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newAudioFiles: AudioFile[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const audioFile: AudioFile = {
        id: Date.now() + i,
        file: file,
      };
      newAudioFiles.push(audioFile);
    }
    setAudioFiles((prevFiles) => [...prevFiles, ...newAudioFiles]);
  };

  const handleRemoveAudio = (id: number) => {
    setAudioFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return (
    <div>
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileChange}
      />
      <ul>
        {audioFiles.map((audioFile) => (
          <li key={audioFile.id}>
            <audio controls>
              <source src={URL.createObjectURL(audioFile.file)} />
              Your browser does not support the audio element.
            </audio>
            <button onClick={() => handleRemoveAudio(audioFile.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioUploader;

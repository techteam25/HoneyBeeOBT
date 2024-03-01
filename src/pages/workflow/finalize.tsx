import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";
import Crunker from "crunker";

interface JSONData {
  name: string;
  description: string;
  link: string;
  key: string;
}

interface selectedData {
  learn: {
    video: string;
    title: string;
  };
  passages: [
    {
      image: string;
      image_description: string;
      audio: string;
      book: string;
      chapter: number;
      verses: string;
      text: string;
      notes: [
        {
          note: string;
          words: string;
          more: string;
        }
      ];
    }
  ];
}

const Finalize = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const [data, setData] = React.useState(0);
  const router = useRouter();
  const [selectedData, setSelectedData] = React.useState<selectedData>(
    {} as selectedData
  );
  const [arrayPassage, setArrayPassage] = React.useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [outputFileName, setOutputFileName] = useState<string>("output");

  const handleFilesSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        newFiles.push(files[i]);
      }
      setSelectedFiles([...selectedFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const fullAudioDownload = () => {
    var tempAudio = selectedFiles;
    console.log(tempAudio);
    let crunker = new Crunker();
    crunker
      .fetchAudio(...tempAudio)
      .then((buffers) => crunker.concatAudio(buffers))
      .then((merged) => crunker.export(merged, "audio/mp3"))
      .then((output) => crunker.download(output.blob, outputFileName))
      .catch((error) => {
        throw new Error(error);
      });
  };

  function setMultipleFiles(input: HTMLInputElement, data: File[]) {
    // ClipboardEvent.clipboardData has a greater support than the constructor
    // but the result it's the same
    const dt = new ClipboardEvent("").clipboardData || new DataTransfer();

    for (const file of data) {
      dt.items.add(file);
    }

    if (dt.files.length) {
      input.files = dt.files;
    }
  }

  const handleOutputFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutputFileName(event.target.value);
  };

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/testSelected").then((response) => {
          setSelectedData(response.data);
          var temp = response.data.passages[data].text.split(" ");
          setArrayPassage(temp);
        });
        return;
      }
    }
    getData();
  }, [arrayData, toggle]);

  return (
    <WorkflowLayout route={router.pathname}>
      <TitleCard title="Finalize" colorOverride="#AA80FF" />
      <Box
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Typography
          variant="h2"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Export a project!
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Select all of the audio files you would like to export, make sure you
          select them in the order you would like them to appear.
        </Typography>
        <TextField
          label="Output File Name"
          value={outputFileName}
          onChange={handleOutputFileNameChange}
          variant="outlined"
          style={{ margin: "2vh" }}
        />
        <input
          name="myfile"
          type="file"
          multiple
          onChange={handleFilesSelect}
        />
        <div>
          {selectedFiles.map((file, index) => (
            <div key={index}>
              <span>{file.name}</span>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFile(index)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <Button
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
          variant="contained"
          onClick={() => {
            fullAudioDownload();
          }}
        >
          Audio Export
        </Button>
      </Box>
      <Typography
        variant="h5"
        style={{ marginTop: "2vh", marginBottom: "2vh", textAlign: "center" }}
      >
        For a Full Video export, please use the software linked here:{" "}
        <u>
          <a href="https://github.com/OOCAZ/honeybee-movie-compiler">
            Video Compiling Software
          </a>
        </u>
      </Typography>
    </WorkflowLayout>
  );
};

export default Finalize;

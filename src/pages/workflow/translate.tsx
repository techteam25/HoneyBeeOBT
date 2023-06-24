import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { AudioRecorder } from "react-audio-voice-recorder";
import Image from "next/image";

interface JSONData {
  name: string;
  image: string;
  audio: string;
  passage: string;
  data: string;
  key: string;
}

interface AudioData {
  index: number;
  audio: string;
  title: string;
}

const Translate = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([
    {
      name: "Loading",
      image: "",
      audio: "",
      data: "lorem ipsum",
      passage:
        "In those days John the Baptist came, preaching in the wilderness of Judea 2 and saying, “Repent, for the kingdom of heaven has come near.” 3 This is he who was spoken of through the prophet Isaiah:",
      key: "story1",
    },
  ]);
  const [data, setData] = React.useState(0);
  const [audioRecordings, setAudioRecordings] = React.useState<AudioData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/selected").then((response) => {
          setArrayData([]);
          for (let int in response.data) {
            setArrayData((arrayData) => [...arrayData, response.data[int]]);
          }
        });
        return;
      }
    }
    getData();
    console.log(arrayData);
  }, [arrayData, toggle]);

  const addAudioElement = (blob: Blob | MediaSource) => {
    const url = URL.createObjectURL(blob);
    arrayData[data].audio = url;
    const packer = {
      index: data,
      audio: url,
      title: "Need to add naming function,",
    };
    setAudioRecordings((audioRecordings) => [...audioRecordings, packer]);
  };

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Translate
          </Typography>
        </CardContent>
      </Card>
      <Box
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Image
          src={arrayData[data].image || "/tomb2.jpg"}
          alt={arrayData[data].passage || "example description"}
          width={200}
          height={200}
        />
      </Box>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <Typography
          variant="h3"
          style={{ marginTop: "5vh", textAlign: "center" }}
        >
          {arrayData[data].name}
        </Typography>
        <CardContent>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            {arrayData[data].passage}
          </Typography>
        </CardContent>
      </Card>
      <Card
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
        variant="outlined"
      >
        <CardContent>
          {audioRecordings.map((element) => {
            if (element.index == data) {
              return <audio src={element.audio} key={element.audio} controls />;
            }
          })}
        </CardContent>
      </Card>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <Button
          sx={{ mr: "5vw" }}
          onClick={() => {
            if (data > 0) setData(data - 1);
          }}
          variant="contained"
        >
          Go back a Section
        </Button>
        <Button
          onClick={() => {
            if (data < arrayData.length - 1) setData(data + 1);
          }}
          variant="contained"
        >
          Go forward a Section
        </Button>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          downloadOnSavePress={true}
          downloadFileExtension="mp3"
        />
      </Box>

      <Link
        id="workflow-translate"
        className="menu-item"
        data-testid="burger-workflow-translate"
        href="/workflow/naturalness"
      >
        <Card sx={{ ml: "15vw", mr: "15vw", mb: "5vh", mt: "5vh" }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Onto Naturalness
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Translate;

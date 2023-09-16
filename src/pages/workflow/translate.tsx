import { Box, Card, CardContent } from "@mui/material";
import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import { AudioRecorder } from "react-audio-voice-recorder";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
    <WorkflowLayout route={router.pathname}>
      <TitleCard title="Translate" />
      <ImageCards
        image={arrayData[data].image}
        description={arrayData[data].data}
      />
      <ScriptureCards
        name={arrayData[data].name}
        passage={arrayData[data].passage}
      />
      {!!audioRecordings.length && <Card
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
      </Card>}
      <PageNav page={data} setPage={setData} length={arrayData.length} />
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
    </WorkflowLayout>
  );
};

export default Translate;
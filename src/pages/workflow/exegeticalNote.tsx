import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import AccuracyButton from "@/components/accuracyChecker/accuracyButton";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";
import { AudioRecorder } from "react-audio-voice-recorder";
import { Box, Card, CardContent, CircularProgress } from "@mui/material";
import { Typography } from "@/components/UI/Typography";

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

const Accuracy = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([
    {
      name: "Loading",
      image: "/tomb2.jpg",
      audio: "",
      data: "lorem ipsum",
      passage:
        "In those days John the Baptist came, preaching in the wilderness of Judea 2 and saying, “Repent, for the kingdom of heaven has come near.” 3 This is he who was spoken of through the prophet Isaiah:",
      key: "story1",
    },
  ]);
  const [data, setData] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const [selectedData, setSelectedData] = React.useState<selectedData>(
    {} as selectedData
  );
  const [audioRecordings, setAudioRecordings] = React.useState<AudioData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/testSelected").then((response) => {
          setSelectedData(response.data);
          setLoading(false);
        });
        return;
      }
    }
    getData();
  }, [toggle]);

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
      {loading ? (
        <div>
          <TitleCard title="Accuracy Check" colorOverride="#008AE6" />
          <Typography as="h1">Loading</Typography>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <TitleCard title="Accuracy Check" colorOverride="#008AE6" />
          <ImageCards
            image={
              selectedData.passages
                ? selectedData.passages[data].image
                : "/honeybee_logo.png"
            }
            description={
              selectedData.passages
                ? selectedData.passages[data].image_description
                : "Loading"
            }
          />
          <ScriptureCards
            name={`${
              selectedData.passages
                ? selectedData.passages[data].book
                : "Loading"
            } ${JSON.stringify(
              selectedData.passages ? selectedData.passages[data].chapter : ""
            )}:${
              selectedData.passages ? selectedData.passages[data].verses : ""
            }`}
            passage={
              selectedData.passages
                ? selectedData.passages[data].text
                : "Loading"
            }
          />
          {!!audioRecordings.length && (
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
                  if (element.index === data) {
                    return (
                      <audio src={element.audio} key={element.audio} controls />
                    );
                  }
                })}
              </CardContent>
            </Card>
          )}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography as="h2">Original Audio:</Typography>
            <audio src={selectedData.passages[data].audio} controls />
          </div>
          <PageNav
            page={data}
            setPage={setData}
            length={selectedData.passages.length}
          />
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
        </div>
      )}
      <AccuracyButton />
    </WorkflowLayout>
  );
};

export default Accuracy;

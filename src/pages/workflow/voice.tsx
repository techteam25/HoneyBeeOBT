import React, { ReactNode, useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";
import { AudioRecorder } from "react-audio-voice-recorder";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { Typography } from "@/components/UI/Typography";
import Crunker from "crunker";
import exegeticalHelps from "../../../public/exegeticalHelps.json";
import Link from "next/link";

export interface IFile {
  file: string;
}

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

const VoiceStudio = () => {
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
  const [audioRecordings, setAudioRecordings] = React.useState<AudioData[]>([]);
  const [selectedData, setSelectedData] = React.useState<selectedData>(
    {} as selectedData
  );
  const router = useRouter();
  const [arrayPassage, setArrayPassage] = React.useState<string[]>([]);

  function exegeticalSetter() {
    var temp: ReactNode[] = [];
    arrayPassage.map((item) => {
      var alreadyPushed = false;
      exegeticalHelps.map((element, index) => {
        if (index === exegeticalHelps.length - 1 && !alreadyPushed) {
          temp.push(item + " ");
        }
        if (item.includes(element.term)) {
          console.log(element.term);
          temp.push(
            <Link
              href={{
                pathname: "/workflow/exegeticalNote",
                query: { term: element.term, notes: element.notes },
              }}
            >
              <span style={{ color: "blue" }}>
                <u>{item + " "} </u>
              </span>
            </Link>
          );
          alreadyPushed = true;
        }
      });
    });
    return temp;
  }

  function processExegeticalHelps() {
    var temp = [];
    temp.push(<Typography as="p">{exegeticalSetter()}</Typography>);

    return temp;
  }

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/testSelected").then((response) => {
          setSelectedData(response.data);
          var temp = response.data.passages[data].text.split(" ");
          setArrayPassage(temp);
          processExegeticalHelps();
          setLoading(false);
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

  const fullAudioDownload = () => {
    var tempAudio = [] as string[];
    selectedData.passages.forEach((element, index) => {
      tempAudio.push(selectedData.passages[index].audio);
    });
    console.log(tempAudio);
    let crunker = new Crunker();
    crunker
      .fetchAudio(...tempAudio)
      .then((buffers) => crunker.concatAudio(buffers))
      .then((merged) => crunker.export(merged, "audio/mp3"))
      .then((output) => crunker.download(output.blob))
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

  return (
    <WorkflowLayout route={router.pathname}>
      {loading ? (
        <div>
          <TitleCard title="Voice Studio" colorOverride="#FF0066" />
          <Typography as="h1">Loading</Typography>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <TitleCard title="Voice Studio" colorOverride="#FF0066" />
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
              selectedData.passages ? processExegeticalHelps() : "Loading"
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
            passage={selectedData}
            exegeticalSetter={processExegeticalHelps}
            setPassage={setArrayPassage}
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
      <input name="myfile" type="file" multiple />
      <Button
        onClick={() => {
          fullAudioDownload();
        }}
      >
        Audio Export
      </Button>
    </WorkflowLayout>
  );
};

export default VoiceStudio;

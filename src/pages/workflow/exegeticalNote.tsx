import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import AccuracyButton from "@/components/accuracyChecker/accuracyButton";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";
import { AudioRecorder } from "react-audio-voice-recorder";
import { Box, Button, Card, CardContent, CircularProgress } from "@mui/material";
import { Typography } from "@/components/UI/Typography";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";


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
  const router = useRouter();
  const params = useParams()
  console.log(params)
const data = router.query.name;
let { notes = "", term = "" } = router.query;
//const proccessed = JSON.parse(data)
console.log(data)
  

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "5vh",
          textAlign: "center"
        }}
      >
        <Typography as="h2">{term}</Typography>
        <Typography as="h5">{notes}</Typography>
        <Button onClick={() => {router.push("/workflow/translate")}}>Back to Translate</Button>
      </Box>
    </>
  );
};

export default Accuracy;

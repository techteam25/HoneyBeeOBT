import { Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import ReactPlayer from "react-player";
import DOMPurify from "dompurify";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";

interface selectedData {
  learn: {
    video: string,
    title: string
  },
  passages:[
    {
      image: string,
      image_description: string,
      book: string,
      chapter: number,
      verses: string,
      text: string,
      notes: [
        {
          note: string,
          words: string,
          more: string
        }
      ]
    }
  ]
}

const Learn = () => {
  const [toggle, setToggle] = React.useState(true);
  const [selectedData, setSelectedData] = React.useState<selectedData>({} as selectedData);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

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
  }, [ toggle]);

  return ( 
    <WorkflowLayout route={router.pathname}>
      <TitleCard title="Learn" colorOverride="#00CC88"/>
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
        {
          loading ? 
            <CircularProgress />
          : <ReactPlayer
              url={selectedData.learn.video ? DOMPurify.sanitize(selectedData.learn.video) : DOMPurify.sanitize("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
              key={selectedData.learn.title ? selectedData.learn.title : "Learn"}
            />
        }
        
      </Box>
    </WorkflowLayout>
  );
};

export default Learn;

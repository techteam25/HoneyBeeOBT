import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import ReactPlayer from "react-player";
import DOMPurify from "dompurify";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";

interface JSONData {
  name: string;
  video: string;
  key: string;
}

const Learn = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const router = useRouter();

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/learn").then((response) => {
          for (let int in response.data) {
            setArrayData((arrayData) => [...arrayData, response.data[int]]);
          }
        });
        return;
      }
    }
    getData();
  }, [arrayData, toggle]);

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
        {arrayData.map((element) => {
          const address: string = DOMPurify.sanitize(element.video);
          const address2 = address.split("https://youtube.com/");
          return (
            <ReactPlayer
              url={`https://youtube.com/ + ${address2}`}
              key={element.key}
            />
          );
        })}
      </Box>
    </WorkflowLayout>
  );
};

export default Learn;

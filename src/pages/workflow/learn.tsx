import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import DOMPurify from "dompurify";
import BottomNav from "@/components/menus/bottomNav";
import TitleCard from "@/components/cards/titleCard";

interface JSONData {
  name: string;
  video: string;
  key: string;
}

const Learn = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

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
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <TitleCard title="Learn" />
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
        {arrayData.map((element) => (
          <ReactPlayer
            url={DOMPurify.sanitize(`${element.video}`)}
            key={element.key}
          />
        ))}
      </Box>
      <BottomNav />
    </div>
  );
};

export default Learn;

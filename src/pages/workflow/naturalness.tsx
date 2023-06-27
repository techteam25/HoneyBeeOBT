import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DOMPurify from "dompurify";
import Image from "next/image";
import BottomNav from "@/components/menus/bottomNav";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";

interface JSONData {
  name: string;
  image: string;
  description: string;
  passage: string;
  audio: string;
  key: string;
}

const Naturalness = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([
    {
      name: "Loading",
      description: "",
      audio: "",
      image: "",
      passage:
        "In those days John the Baptist came, preaching in the wilderness of Judea 2 and saying, “Repent, for the kingdom of heaven has come near.” 3 This is he who was spoken of through the prophet Isaiah:",
      key: "story1",
    },
  ]);
  const [data, setData] = React.useState(0);

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

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <TitleCard title="Naturalness Check" />
      <ImageCards
        image={arrayData[data].image}
        description={arrayData[data].description}
      />
      <ScriptureCards
        name={arrayData[data].name}
        passage={arrayData[data].passage}
      />
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
          <audio src={arrayData[data].audio} controls />
        </CardContent>
      </Card>
      <PageNav page={data} setPage={setData} length={arrayData.length} />
      <BottomNav />
    </div>
  );
};

export default Naturalness;

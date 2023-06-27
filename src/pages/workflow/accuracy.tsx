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
import DOMPurify from "dompurify";
import ReactPlayer from "react-player";
import AccuracyButton from "@/components/accuracyChecker/accuracyButton";
import Image from "next/image";
import BottomNav from "@/components/menus/bottomNav";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";

interface JSONData {
  name: string;
  image: string;
  passage: string;
  data: string;
  key: string;
}

const Accuracy = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([
    {
      name: "Loading",
      image: "/tomb2.jpg",
      data: "lorem ipsum",
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
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Accuracy Check
          </Typography>
        </CardContent>
      </Card>
      <ImageCards
        image={arrayData[data].image}
        description={arrayData[data].data}
      />
      <ScriptureCards
        name={arrayData[data].name}
        passage={arrayData[data].passage}
      />
      <PageNav page={data} setPage={setData} length={arrayData.length} />
      <AccuracyButton />
      <BottomNav />
    </div>
  );
};

export default Accuracy;

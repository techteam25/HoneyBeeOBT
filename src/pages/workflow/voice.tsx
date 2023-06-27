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
import Image from "next/image";
import BottomNav from "@/components/menus/bottomNav";
import PageNav from "@/components/menus/pageNav";

interface JSONData {
  name: string;
  image: string;
  passage: string;
  data: string;
  key: string;
}

const VoiceStudio = () => {
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
            Voice Studio
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
          alt={arrayData[data].data || "example description"}
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
      <PageNav data={data} setData={setData} arrayData={arrayData} />
      <BottomNav />
    </div>
  );
};

export default VoiceStudio;

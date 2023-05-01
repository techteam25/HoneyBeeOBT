import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";

interface JSONData {
  name: string;
  description: string;
  image: string;
  link: string;
  key: string;
}

const Download = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/download").then((response) => {
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
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Download Templates
          </Typography>
        </CardContent>
      </Card>

      {arrayData.map((element) => (
        <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
          <Link href={DOMPurify.sanitize(element.link)}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={element.image}
                  alt={element.description}
                  width={100}
                  height={100}
                />
                <Typography sx={{ ml: "10vw" }}>{element.name}</Typography>
              </Box>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Download;

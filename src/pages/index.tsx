import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface JSONData {
  name: string;
  description: string;
  image: string;
  key: string;
}

const Scripture = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  async function getData() {
    if (toggle) {
      await axios.get("/api/example").then((response) => {
        for (let int in response.data) {
          setArrayData((arrayData) => [...arrayData, response.data[int]]);
        }

        console.log(arrayData);
      });
      return;
    }
  }

  useEffect(() => {
    setToggle(false);
    getData();
  }, []);

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Story Template
          </Typography>
        </CardContent>
      </Card>

      {arrayData.map((element, key) => (
        <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
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
        </Card>
      ))}
    </div>
  );
};

export default Scripture;

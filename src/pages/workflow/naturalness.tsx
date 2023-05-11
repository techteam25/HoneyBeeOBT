import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DOMPurify from "dompurify";

interface JSONData {
  name: string;
  description: string;
  audio: string;
  key: string;
}

const Naturalness = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/naturalness").then((response) => {
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
            Naturalness
          </Typography>
        </CardContent>
      </Card>

      {arrayData.map((element) => (
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
          key={element.key}
        >
          <CardContent>
            <audio src={element.audio} controls />
          </CardContent>
        </Card>
      ))}
      <Link
        id="workflow-translate"
        className="menu-item"
        data-testid="burger-workflow-translate"
        href="/workflow/accuracy"
      >
        <Card sx={{ ml: "15vw", mr: "15vw", mb: "5vh" }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Onto Accuracy
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Naturalness;

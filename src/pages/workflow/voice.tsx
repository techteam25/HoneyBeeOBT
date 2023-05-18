import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AudioRecorder from "@/components/audioRecorder/audioRecorder";

interface JSONData {
  name: string;
  description: string;
  link: string;
  key: string;
}

const VoiceStudio = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow").then((response) => {
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
            Accuracy Check
          </Typography>
        </CardContent>
      </Card>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        {" "}
      </Box>

      <Link
        id="workflow-translate"
        className="menu-item"
        data-testid="burger-workflow-translate"
        href="/workflow/finalize"
      >
        <Card sx={{ ml: "15vw", mr: "15vw", mb: "5vh", mt: "5vh" }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Onto Finalize
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default VoiceStudio;

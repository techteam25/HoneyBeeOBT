import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";

interface JSONData {
  name: string;
  description: string;
  link: string;
  key: string;
}

const Finalize = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const router = useRouter();

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
    <WorkflowLayout route={router.pathname}>
      <TitleCard title="Finalize" />
      <Box
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Typography
          variant="h2"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Local Credits
        </Typography>
        <Button variant="contained">Edit Local Credits</Button>
        <Typography
          variant="h2"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Add a File name
        </Typography>
        <TextField
          id="outlined-basic"
          label="Optional File name"
          variant="outlined"
        />
        <Typography
          variant="h2"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Options
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Include Background Music"
          />
          <FormControlLabel control={<Checkbox />} label="Include Local Song" />
          <FormControlLabel control={<Checkbox />} label="Include Pictures" />
          <FormControlLabel control={<Checkbox />} label="Include Story Text" />
        </FormGroup>
        <Typography
          variant="h2"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
        >
          Format
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="audio" control={<Radio />} label="Audio" />
            <FormControlLabel value="video" control={<Radio />} label="Video" />
            <FormControlLabel value="epub" control={<Radio />} label="ePub" />
          </RadioGroup>
        </FormControl>
      </Box>
    </WorkflowLayout>
  );
};

export default Finalize;

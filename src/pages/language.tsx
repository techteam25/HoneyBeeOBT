import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { act } from "@testing-library/react";

interface JSONData {
  name: string;
  description: string;
  image: string;
  key: string;
  progress: boolean;
  completed: boolean;
}

const Languages = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/language").then((response) => {
          for (let int in response.data) {
            act(() => {
              setArrayData((arrayData) => [...arrayData, response.data[int]]);
            });
          }

          console.log(arrayData);
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
            Select Language
          </Typography>
        </CardContent>
      </Card>
      <Grid container justifyContent="center">
        <nav
          aria-label="List of Languages"
          style={{
            paddingTop: "2vh",
          }}
        >
          {arrayData.map((element) => (
            <List
              key={element.key}
              style={{ paddingTop: "1vh", textAlign: "center" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={element.name} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </nav>
      </Grid>
    </div>
  );
};

export default Languages;

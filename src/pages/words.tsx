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
import WordDialog from "@/components/dialogs/wordDialogs";

interface JSONData {
  name: string;
  description: string;
  key: string;
}

function handleDialog(
  name: string,
  description: string,
  setClose: any,
  close: boolean,
  key: string
) {
  setClose(false);
  return (
    <WordDialog
      close={close}
      name={name}
      description={description}
      setClose={setClose}
    />
  );
}

const Words = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const [close, setClose] = React.useState(true);
  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/words").then((response) => {
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
            Word Links List
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
            <div key={element.key}>
              <List style={{ paddingTop: "1vh", textAlign: "center" }}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      handleDialog(
                        element.name,
                        element.description,
                        setClose,
                        close,
                        element.key
                      )
                    }
                  >
                    <ListItemText primary={element.name} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          ))}
        </nav>
      </Grid>
    </div>
  );
};

export default Words;

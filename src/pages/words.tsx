import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";

interface JSONData {
  name: string;
  description: string;
  key: string;
}

const Words = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/words").then((response) => {
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
            Word Links List
          </Typography>
        </CardContent>
      </Card>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="word-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
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
                    onClick={() => {
                      setName(element.name);
                      setDescription(element.description);
                      handleClickOpen();
                    }}
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

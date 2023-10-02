import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import styles from "./pageNav.module.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Typography } from "../UI/Typography";
import React from "react";
import axios from "axios";

const Help = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ help: "Placeholder Text" });
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.help}>
      <IconButton
        aria-label="delete"
        onClick={() => {
          setOpen(true);
          axios
            .post("/api/help", { path: window.location.pathname })
            .then((res) => {
              setData({ help: res.data.help });
              console.log(res.data.help);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <QuestionMarkIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Need Help?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{data.help}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Help;

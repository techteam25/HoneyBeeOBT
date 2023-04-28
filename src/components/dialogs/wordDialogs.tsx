import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export interface SimpleDialogProps {
  close: boolean;
  name: string;
  description: string;
  setClose: (value: boolean) => void;
}

function WordDialog(props: SimpleDialogProps) {
  const { setClose, close } = props;

  const handleClose = () => {
    setClose(true);
  };

  return (
    <Dialog onClose={handleClose} open={close}>
      <DialogTitle>{props.name}</DialogTitle>
      <Typography>{props.description}</Typography>
    </Dialog>
  );
}

export default WordDialog;

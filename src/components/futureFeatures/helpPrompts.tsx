import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function HelpPrompts() {
  const [data, setData] = React.useState({ help: "Placeholder Text" });
  axios
    .post("/api/help", { path: window.location.pathname })
    .then((res) => {
      setData({ help: res.data.help });
      console.log(res.data.help);
    })
    .catch((err) => {
      console.log(err);
    });
  return <Typography>{data.help}</Typography>;
}

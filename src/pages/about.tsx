import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";

const About = () => {
  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            About HoneyBeeOBT
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ ml: "15vw", mr: "15vw", mt: "5vh" }}>
        <CardContent>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Direction for HoneyBee development: Those familiar with
            StoryPublisher will notice as they go through the concept design
            slides below, that HoneyBee and SPadv are very similar. There are
            changes to be sure, especially on T&R and AC phases, but a vast
            majority of it is very similar. So, we will be starting with the
            SPadv code as our base. Also, we will be using the JSON template
            file, keeping as many of the tag names the same as possible.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;

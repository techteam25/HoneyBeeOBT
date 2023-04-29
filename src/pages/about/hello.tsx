import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Hello = () => {
  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            This is a test for Hannah
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hello;

import { Card, CardContent, Typography } from "@mui/material";

const ScriptureCards = (props: { name: string; passage: string }) => {
  return (
    <Card sx={{ ml: "15vw", mr: "15vw" }}>
      <Typography
        variant="h3"
        style={{ marginTop: "5vh", textAlign: "center" }}
      >
        {props.name}
      </Typography>
      <CardContent>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {props.passage}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScriptureCards;

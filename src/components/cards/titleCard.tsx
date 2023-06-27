import { Card, CardContent, Typography } from "@mui/material";

const TitleCard = (props: { title: string }) => {
  return (
    <Card sx={{ ml: "15vw", mr: "15vw" }}>
      <CardContent>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TitleCard;

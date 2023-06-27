import { Box, IconButton } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

const AccuracyButton = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
      }}
    >
      <IconButton color="primary">
        <CheckCircle style={{ fontSize: "50px" }} />
      </IconButton>
    </Box>
  );
};

export default AccuracyButton;

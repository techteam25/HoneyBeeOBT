import { Box, Button } from "@mui/material";

const PageNav = (props: {
  page: number;
  setPage: (arg0: number) => void;
  length: number;
}) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
      }}
    >
      <Button
        sx={{ mr: "5vw" }}
        onClick={() => {
          if (props.page > 0) props.setPage(props.page - 1);
        }}
        variant="contained"
      >
        Go back a Page
      </Button>
      <Button
        onClick={() => {
          if (props.page < props.length - 1) props.setPage(props.page + 1);
        }}
        variant="contained"
      >
        Go forward a Page
      </Button>
    </Box>
  );
};

export default PageNav;

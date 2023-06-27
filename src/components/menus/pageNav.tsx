import { Box, Button } from "@mui/material";

const PageNav = (props: {
  data: number;
  setData: (arg0: number) => void;
  arrayData: string | any[];
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
          if (props.data > 0) props.setData(props.data - 1);
        }}
        variant="contained"
      >
        Go back a Page
      </Button>
      <Button
        onClick={() => {
          if (props.data < props.arrayData.length - 1)
            props.setData(props.data + 1);
        }}
        variant="contained"
      >
        Go forward a Page
      </Button>
    </Box>
  );
};

export default PageNav;

import { Box, Button } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styles from './pageNav.module.css';

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
      className={styles.backButton}
      size="large"
        onClick={() => {
          if (props.page > 0) props.setPage(props.page - 1);
        }}
        variant="contained"
      >
        <ArrowBackOutlinedIcon />
      </Button>
      <Button
      className={styles.nextButton}
      size="large"
        onClick={() => {
          if (props.page < props.length - 1) props.setPage(props.page + 1);
        }}
        variant="contained"
      >
        <ArrowForwardOutlinedIcon />
      </Button>
    </Box>
  );
};

export default PageNav;

import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import styles from "./pageNav.module.css";

const PageNav = (props: {
  page: number;
  setPage: (arg0: number) => void;
  length: number;
}) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.backButton}>
        <Button
          size="large"
          onClick={() => {
            if (props.page > 0) props.setPage(props.page - 1);
          }}
          variant="contained"
        >
          <ArrowBackOutlinedIcon />
        </Button>
      </div>
      <div className={styles.nextButton}>
        <Button
          size="large"
          onClick={() => {
            if (props.page < props.length - 1) props.setPage(props.page + 1);
          }}
          variant="contained"
        >
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default PageNav;

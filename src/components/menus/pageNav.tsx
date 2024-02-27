import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import styles from "./pageNav.module.css";

interface selectedData {
  learn: {
    video: string;
    title: string;
  };
  passages: [
    {
      image: string;
      image_description: string;
      audio: string;
      book: string;
      chapter: number;
      verses: string;
      text: string;
      notes: [
        {
          note: string;
          words: string;
          more: string;
        }
      ];
    }
  ];
}

const PageNav = (props: {
  page: number;
  passage: selectedData;
  exegeticalSetter: () => void;
  setPassage: (arg0: string[]) => void;
  setPage: (arg0: number) => void;
  length: number;
}) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.backButton}>
        <Button
          size="large"
          onClick={() => {
            if (props.page > 0) {
              props.setPage(props.page - 1);
              var temp = props.passage.passages[props.page - 1].text.split(" ");
              props.setPassage(temp);
              props.exegeticalSetter();
            }
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
            if (props.page < props.length - 1) {
              props.setPage(props.page + 1);
              var temp = props.passage.passages[props.page + 1].text.split(" ");
              props.setPassage(temp);
              props.exegeticalSetter();
            }
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

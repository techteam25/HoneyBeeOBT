import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./BottomNav.module.css";
import React, { useEffect } from "react";

const BottomNav = ({ route }: { route: string }) => {
  const [learn, setLearn] = React.useState("#00cc88");
  const [translate, setTranslate] = React.useState("#ff0000");
  const [naturalness, setNaturalness] = React.useState("#009900");
  const [accuracy, setAccuracy] = React.useState("#008ae6");
  const [voice, setVoice] = React.useState("#ff0066");
  const [finalize, setFinalize] = React.useState("#aa80ff");
  const [review, setReview] = React.useState("#ff6600");
  const [toggle, setToggle] = React.useState(true);
  useEffect(() => {
    setToggle(false);
    if (route == "/workflow/learn") {
      setLearn("#e6fff7");
    } else if (route == "/workflow/translate") {
      setTranslate("#ffe6e6");
    } else if (route == "/workflow/naturalness") {
      setNaturalness("#e6ffe6");
    } else if (route == "/workflow/accuracy") {
      setAccuracy("#e6f5ff");
    } else if (route == "/workflow/voice") {
      setVoice("#ffe6f0");
    } else if (route == "/workflow/finalize") {
      setFinalize("#eee6ff");
    } else if (route == "/workflow/review") {
      setReview("#fff0e6");
    }
  }, [toggle]);

  return (
    <div className={styles.bottomNavContainer}>
      <Link href="/workflow/learn">
        <Button sx={{ backgroundColor: learn }} variant="contained">
          Learn
        </Button>
      </Link>
      <Link href="/workflow/translate">
        <Button
          sx={{ backgroundColor: translate, ml: "2vw" }}
          variant="contained"
        >
          Translate
        </Button>
      </Link>
      <Link href="/workflow/naturalness">
        <Button
          sx={{ backgroundColor: naturalness, ml: "2vw" }}
          variant="contained"
        >
          Naturalness
        </Button>
      </Link>
      <Link href="/workflow/accuracy">
        <Button
          sx={{ backgroundColor: accuracy, ml: "2vw" }}
          variant="contained"
        >
          Accuracy
        </Button>
      </Link>
      <Link href="/workflow/voice">
        <Button sx={{ backgroundColor: voice, ml: "2vw" }} variant="contained">
          Voice Studio
        </Button>
      </Link>
      <Link href="/workflow/finalize">
        <Button
          sx={{ backgroundColor: finalize, ml: "2vw" }}
          variant="contained"
        >
          Finalize
        </Button>
      </Link>
      <Link href="/workflow/review">
        <Button sx={{ backgroundColor: review, ml: "2vw" }} variant="contained">
          Review
        </Button>
      </Link>
    </div>
  );
};

export default BottomNav;

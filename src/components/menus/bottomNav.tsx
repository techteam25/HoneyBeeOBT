import { Box, Button } from "@mui/material";
import Link from "next/link";

/* TODO: Add styling for mobile so that the layout of the bottuns will flip to vertical
    This code should work:
        @media screen (max-width: 480px){
            .signup-wide #signupForm{
                flex-direction: column;
                align-items: center;
            }
        }
*/

const BottomNav = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
    >
      <Link href="/workflow/learn">
        <Button sx={{ backgroundColor: "#00cc88" }} variant="contained">
          Learn
        </Button>
      </Link>
      <Link href="/workflow/translate">
        <Button
          sx={{ backgroundColor: "#ff0000", ml: "2vw" }}
          variant="contained"
        >
          Translate
        </Button>
      </Link>
      <Link href="/workflow/naturalness">
        <Button
          sx={{ backgroundColor: "#009900", ml: "2vw" }}
          variant="contained"
        >
          Naturalness
        </Button>
      </Link>
      <Link href="/workflow/accuracy">
        <Button
          sx={{ backgroundColor: "#008ae6", ml: "2vw" }}
          variant="contained"
        >
          Accuracy
        </Button>
      </Link>
      <Link href="/workflow/voice">
        <Button
          sx={{ backgroundColor: "#ff0066", ml: "2vw" }}
          variant="contained"
        >
          Voice Studio
        </Button>
      </Link>
      <Link href="/workflow/finalize">
        <Button
          sx={{ backgroundColor: "#aa80ff", ml: "2vw" }}
          variant="contained"
        >
          Finalize
        </Button>
      </Link>
      <Link href="/workflow/review">
        <Button
          sx={{ backgroundColor: "#ff6600", ml: "2vw" }}
          variant="contained"
        >
          Review
        </Button>
      </Link>
    </Box>
  );
};

export default BottomNav;

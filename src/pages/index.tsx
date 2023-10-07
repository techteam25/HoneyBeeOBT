import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  //Loading State
  if (isLoading)
    return (
      <div style={{ textAlign: "center", marginTop: "10vh" }}>
        <Typography>Authentication is Loading...</Typography>
        <CircularProgress />
      </div>
    );
  //Error State
  if (error) return <div>{error.message}</div>;
  //User State
  if (user) router.push("/home");

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Login to HoneyBee
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: "100%",
          mt: "2vh",
          textAlign: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            router.push("api/auth/login");
          }}
        >
          <Typography>Login</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;

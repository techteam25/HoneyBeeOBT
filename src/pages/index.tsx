import {
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  //Loading State
  if (isLoading)
    return (
      <div>
        <Typography>Loading...</Typography>
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

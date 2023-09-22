import { Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

interface JSONData {
  name: string;
  description: string;
  image: string;
  key: string;
  progress: boolean;
  completed: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const { user, error, isLoading } = useUser();
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const [inProgress, setInProgress] = React.useState<JSONData[]>([]);
  const [completed, setCompleted] = React.useState<JSONData[]>([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/home").then((response) => {
          for (let int in response.data) {
            setArrayData((arrayData) => [...arrayData, response.data[int]]);
            if (response.data[int].progress === true) {
              setInProgress((inProgress) => [
                ...inProgress,
                response.data[int],
              ]);
            }
            if (response.data[int].completed === true) {
              setCompleted((inProgress) => [...inProgress, response.data[int]]);
            }
          }
        });
        return;
      }
    }
    getData();
  }, [arrayData, toggle]);

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Story Template
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ width: "100%", mt: "2vh" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="All" {...a11yProps(0)} data-testid="tab-all" />
            <Tab
              label="In Progress"
              {...a11yProps(1)}
              data-testid="tab-progress"
            />
            <Tab
              label="Completed"
              {...a11yProps(2)}
              data-testid="tab-completed"
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {arrayData.map((element) => (
            <Card
              variant="outlined"
              sx={{ m: "5vw" }}
              key={element.key || "homeKey"}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={
                      element.image || "http://localhost:3000/honeybee_logo.png"
                    }
                    alt={element.description || "image for description"}
                    width={100}
                    height={100}
                  />
                  <Typography sx={{ ml: "10vw" }}>{element.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {inProgress.map((element) => (
            <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={element.image}
                    alt={element.description}
                    width={100}
                    height={100}
                  />
                  <Typography sx={{ ml: "10vw" }}>{element.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {completed.map((element) => (
            <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={element.image}
                    alt={element.description}
                    width={100}
                    height={100}
                  />
                  <Typography sx={{ ml: "10vw" }}>{element.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
      </Box>
    </div>
  );
};

export default Home;

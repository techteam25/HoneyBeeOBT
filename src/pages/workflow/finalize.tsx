import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DOMPurify from "dompurify";

interface JSONData {
  name: string;
  description: string;
  link: string;
  key: string;
}

const Finalize = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow").then((response) => {
          for (let int in response.data) {
            setArrayData((arrayData) => [...arrayData, response.data[int]]);
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
            Finalize
          </Typography>
        </CardContent>
      </Card>

      {arrayData.map((element) => (
        <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
          <Link href={DOMPurify.sanitize(element.link)}>
            <CardContent>
              <Typography variant="h5" sx={{ ml: "10vw" }}>
                {element.name}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
      <Link
        id="workflow-translate"
        className="menu-item"
        data-testid="burger-workflow"
        href="/workflow/review"
      >
        <Card sx={{ ml: "15vw", mr: "15vw", mb: "5vh" }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Onto Review
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Finalize;

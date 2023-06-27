import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WorkflowLayout from './layout';
import axios from "axios";
import Link from "next/link";
import DOMPurify from "dompurify";
import BottomNav from "@/components/menus/bottomNav";
import TitleCard from "@/components/cards/titleCard";

interface JSONData {
  name: string;
  description: string;
  link: string;
  key: string;
}

const Review = () => {
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
    <WorkflowLayout>
      <TitleCard title="Review" />

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
    </WorkflowLayout>
  );
};

export default Review;

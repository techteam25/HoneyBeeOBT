import React, { useEffect } from "react";
import WorkflowLayout from "./layout";
import axios from "axios";
import AccuracyButton from "@/components/accuracyChecker/accuracyButton";
import PageNav from "@/components/menus/pageNav";
import ScriptureCards from "@/components/cards/scriptureCards";
import ImageCards from "@/components/cards/imageCards";
import TitleCard from "@/components/cards/titleCard";
import { useRouter } from "next/router";

interface JSONData {
  name: string;
  image: string;
  passage: string;
  data: string;
  key: string;
}

const Accuracy = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([
    {
      name: "Loading",
      image: "/tomb2.jpg",
      data: "lorem ipsum",
      passage:
        "In those days John the Baptist came, preaching in the wilderness of Judea 2 and saying, “Repent, for the kingdom of heaven has come near.” 3 This is he who was spoken of through the prophet Isaiah:",
      key: "story1",
    },
  ]);
  const [data, setData] = React.useState(0);
  const router = useRouter();

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/workflow/selected").then((response) => {
          setArrayData([]);
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
    <WorkflowLayout route={router.pathname}>
      <TitleCard title="Accuracy Check" colorOverride='#008AE6'/>
      <ImageCards
        image={arrayData[data].image}
        description={arrayData[data].data}
      />
      <ScriptureCards
        name={arrayData[data].name}
        passage={arrayData[data].passage}
      />
      <PageNav page={data} setPage={setData} length={arrayData.length} />
      <AccuracyButton />
    </WorkflowLayout>
  );
};

export default Accuracy;

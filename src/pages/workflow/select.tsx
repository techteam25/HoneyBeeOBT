import React, { use, useEffect } from "react";
import jonah12 from "../../../public/assets/templates/Jonah1-2/text.json";
import jonah34 from "../../../public/assets/templates/Jonah3-4/text.json";
import { Typography } from "@/components/UI/Typography";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/components/util/localStorage";
import { get } from "http";

const Select = () => {
  const [list, setList] = React.useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    var temp = [];
    temp.push(jonah12);
    temp.push(jonah34);
    setList(temp);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Typography as="h2">Choose a Template to get started:</Typography>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <Button
              onClick={() => {
                console.log(item);
                setLocalStorageItem("selected", item.learn.title);
                console.log(getLocalStorageItem("selected"));
                router.push({
                  pathname: "/workflow/translate",
                });
              }}
            >
              {item.learn.title}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default Select;

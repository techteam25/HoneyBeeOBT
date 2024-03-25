import { Card } from "./card";
import { Typography } from "../UI/Typography";
import React, { ReactNode } from "react";

const ScriptureCards = (props: {
  name: string;
  passage: string | ReactNode;
}) => {
  return (
    <Card>
      <Typography as="h3">{props.name}</Typography>
      <Typography as="p">
        {typeof props.passage === "string" ? (
          props.passage
        ) : (
          <React.Fragment>{props.passage}</React.Fragment>
        )}
      </Typography>
    </Card>
  );
};

export default ScriptureCards;

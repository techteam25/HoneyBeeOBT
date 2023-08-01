import { Card } from "./card";
import { Typography } from '../UI/Typography';

const ScriptureCards = (props: { name: string; passage: string }) => {
  return (
    <Card>
      <Typography
        as="h3"
      >
        {props.name}
      </Typography>
      <Typography as="p"
      >
        {props.passage}
      </Typography>
    </Card>
  );
};

export default ScriptureCards;

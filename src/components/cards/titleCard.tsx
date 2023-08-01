import { Typography } from '../UI/Typography/Typography';
import { Card } from './card';
import styles from './cards.module.css';

const TitleCard = (props: { title: string }) => {
  return (
    <Card>
      <Typography as="h2" className={styles.titleCard}>{props.title}</Typography>
    </Card>
  )
};
export default TitleCard;

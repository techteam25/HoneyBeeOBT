import { Typography } from '../UI/Typography/Typography';
import { Card } from './card';
import styles from './cards.module.css';

const TitleCard = (props: { title: string, colorOverride?: string }) => {
  const backgroundColor = props.colorOverride || "#1e1e1e"
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Card>
        <Typography as="h2" className={styles.titleCard}>
          {props.title}
        </Typography>
      </Card>
    </div>
  )
};
export default TitleCard;

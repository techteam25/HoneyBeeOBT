import Image from "next/image";
import styles from './cards.module.css';

const ImageCards = (props: { image: string; description: string }) => {
  return (
    <div className={styles.imageCards}>
      <Image
        src={props.image || "/tomb2.jpg"}
        alt={props.description || "example description"}
        width={200}
        height={200}
      />

    </div>
  );
};

export default ImageCards;

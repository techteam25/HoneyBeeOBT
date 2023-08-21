import Image from "next/image";
import styles from './cards.module.css';

const ImageCards = (props: { image: string; description: string }) => {
  return (
    <div className={styles.imageCards}>
      <Image
        src={props.image || "/tomb2.jpg"}
        alt={props.description || "example description"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />

    </div>
  );
};

export default ImageCards;

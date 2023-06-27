import { Box } from "@mui/material";
import Image from "next/image";

const ImageCards = (props: { image: string; description: string }) => {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15vw",
        marginRight: "15vw",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
    >
      <Image
        src={props.image || "/tomb2.jpg"}
        alt={props.description || "example description"}
        width={200}
        height={200}
      />
    </Box>
  );
};

export default ImageCards;

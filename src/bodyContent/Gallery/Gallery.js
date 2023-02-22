import { Box } from "@chakra-ui/react";
import Carosel from "../Carosel/Carosel";

const Gallery = () => {
    return(
      
      <Box pt={{ base: "10%", sm: "12%", md: "13%", lg: "11%" }} id="gallery">
            <Carosel />
        </Box>
    )
}

export default Gallery;
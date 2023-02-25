import { Box } from "@chakra-ui/react";
import Carousel from "../Carousel/Carousel";

const Gallery = () => {
    return(
      
      <Box pt={{ base: "10%", sm: "12%", md: "13%", lg: "11%" }} id="gallery">
            <Carousel />
        </Box>
    )
}

export default Gallery;
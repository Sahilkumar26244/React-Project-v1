import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const headingOtions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}

function Home() {
  return  <Box>
    <MyCarousel/>
    
  </Box>

}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w="full" h={'100vh'}  >
            <Img src={img1}  />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOtions} >
                Watch the future!
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}  >
            <Img src={img2}  />
            <Heading bgColor={"whiteAlpha.600"} color={'white'} {...headingOtions} >
                Watch the future!
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}  >
            <Img src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={'white'} {...headingOtions} >
                Watch the future!
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}  >
            <Img src={img4}  />
            <Heading bgColor={"whiteAlpha.600"} color={'white'} {...headingOtions} >
                Watch the future!
            </Heading>
        </Box>

    </Carousel>
)

export default Home
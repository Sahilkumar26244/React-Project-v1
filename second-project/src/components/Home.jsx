import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/6.png";


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
    <Container minH={'100vh'} maxW={'container.xl'} p='16' >
        <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom="2px solid" m='auto' >Services</Heading>
        <Stack h='full' p='4' alignItems={"center"} direction={["column",'row']} >
            <Image src={img5} filter={"hue-rotate(-130deg"} h={['40','40']} w={'1%'} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"} >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
        </Stack>
    </Container>
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
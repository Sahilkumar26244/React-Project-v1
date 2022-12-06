import React from 'react'
import { Carousel } from "react-responsive-carousel"
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Services() {
  return (
    <div>
        <Carousel
        infiniteLoop
        autoPlay 
        showStatus={false}
        // showArrows={false}
        interval={1000}
        >
            <div>
                <img src={img1} alt='Item1' />
                <p className='legend' >Full Stack</p>
            </div>
            <div>
                <img src={img2} alt='Item1' />
                <p className='legend' >Peer-to-peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner_kids from '../../assets/banner_kids.png'
import banner_mens from '../../assets/banner_mens.png'
import banner_women from '../../assets/banner_women.png'


const ImageSlidebar = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={2500}>
        <img src={banner_kids} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={banner_mens} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={banner_women} alt="" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ImageSlidebar
import React from 'react'
import ImageSlidebar from '../../Components/Imageslidebar/ImageSlidebar'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'


const Home = () => {
  return (
    <div className="home" style={{marginBottom: '100px'}}>
      <ImageSlidebar/>
      <FeaturedProducts title='Our New Collection' display='new_collection'/>
      <FeaturedProducts title="Today's Offer"  display='todays_offer'/>
      <FeaturedProducts title='Our Best Seller' display='bestseller'/>
    </div>
  )
}

export default Home
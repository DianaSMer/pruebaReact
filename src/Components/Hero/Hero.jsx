import React from 'react'
import './Hero.css'
import banner from '../Assets/Banner.png'
import rectangle_info from '../Assets/Rectangle 1.png'



const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-center'>
         <img src={banner} className='background-image'alt=""  />
            <div className="overlay-image">
                <img src={rectangle_info} className='foreground-image' alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Hero
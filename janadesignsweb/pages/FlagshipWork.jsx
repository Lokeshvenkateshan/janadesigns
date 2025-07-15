import FlagshipWorkModule from './FlagshipWorkModule';
import wall from '../images/wallpaper.jpg';
import wing from '../images/pngwing.com.png';
import putta from '../images/putta.png';
import React from 'react'


const FlagshipWork = () => {

    const flagshipWorks = [
  {
    image: wall,
    title: 'Exquisite Silk Saree Collection',
    description: 'Handwoven silk sarees crafted with intricate patterns and vibrant colors. Perfect for every special occasion, these designs embody tradition and elegance.',
  },
  {
    image: wing,
    title: 'Elegant Kanchipuram Silks',
    description: 'Traditional Kanchipuram silk sarees with rich zari borders and vibrant hues, ideal for weddings and festivals.',
  },
  {
    image: putta,
    title: 'Modern Fusion Saree Designs',
    description: 'Innovative designs combining traditional weaving techniques with contemporary styles for the fashion-forward.',
  },
];

  return (
    <div>
        <div className='flagship-sec'>
            <center><h2 className="catalogue-title">My Flagship Works</h2></center>
        </div>
      <FlagshipWorkModule works={flagshipWorks} />
    </div>
  )
}

export default FlagshipWork

import FlagshipWorkModule from './FlagshipWorkModule';
import elephant from '../images/flagship/elephant.bmp';
import deer from '../images/flagship/deer.bmp';
import peacock from '../images/flagship/peacockandelephant.bmp';
import React from 'react'


const FlagshipWork = () => {

    const flagshipWorks = [
  {
    image: elephant,
    title: 'Exquisite Silk Saree Collection',
    description: 'Elephant design crafted with intricate patterns and vibrant colors. Perfect for every special occasion, these designs embody tradition and elegance.',
  },
  {
    image: deer,
    title: 'Elegant Saree Designs',
    description: 'Deer in saree with rich look and vibrant hues, ideal for weddings and festivals.',
  },
  {
    image: peacock,
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

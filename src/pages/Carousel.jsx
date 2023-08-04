import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { img_11, img_4, img_5 } from '../assets';
import Image from 'next/image';

const carousel = () => {
    return (
        <div className='w-full min-h-screen'>
                <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
     
        dynamicHeight={true}
     
        swipeScrollTolerance={5}
        animationHandler="zoom"
        
        >
            <div>
                <Image src={img_11} />
                <p className="-mt-44 py-12 absolute top-0 z-50 font-bold text-5xl">Legend 1</p>
            </div>
            <div>
                <Image src={img_5} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <Image src={img_4} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </div>
    
    );
    }
export default carousel
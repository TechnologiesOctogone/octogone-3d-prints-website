/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation } from "swiper/modules";

/**
 * Utils
 */
import "swiper/css";
import "swiper/css/navigation";



const ImageSwiper = ({ images }) => {

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className='lg:max-w-[540px]'>
            <figure className="img-box rounded-lg mb-4">
            <img 
                src={activeImage}
                loading="lazy"
                className="img-cover" 
            />
            </figure>

            <Swiper
                modules={[Virtual, Navigation]}
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                virtual
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image} virtualIndex={index}>
                        <img src={image} />
                        <button
                            className="absolute inset-0"
                            onClick={() => {
                                setActiveImage(image);
                            }}
                        ></button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSwiper;

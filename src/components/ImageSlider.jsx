import { useState } from "react";
import { HiArrowCircleLeft, HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ImageSlider = ({ images, names, ids }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  

  return (
    
      <div className="w-full h-[82vh] flexCenter md:hidden">
          <div className="image-slider flex items-center justify-evenly gap-2">
            <button onClick={prevSlide} className="cursor-pointer">
              <HiOutlineArrowCircleLeft className='regular-32 text-white'/>
            </button>
            <Link to={`${ids[currentIndex]}`}>
              {/* console.log({ids[currentIndex]}) Checking */}
              <div className='card-img w-[310px] flex items-center justify-center h-full p-4 rounded-5xl flex-col transparent my-4 relative overflow-hidden transition-all duration-500'>
                <img src={images[currentIndex]} className='w-[300px] h-[380px] object-cover rounded-3xl' alt={`Slide ${currentIndex}`} />
                <div className="hover-card absolute top-0 right-0 w-full h-full items-center justify-center rounded-3xl flex-col bg-white gap-4">
                  <p className='text-black bold-32'>{names[currentIndex]}</p>
                  <button className='btn_card regular-12 flex items-center justify-center gap-2'>
                    <p>ဖတ်ရှုရန်</p>
                    <HiArrowRightCircle/>
                  </button>
                </div>
              </div>
            </Link>
            <button onClick={nextSlide}><HiOutlineArrowCircleRight className='regular-32 text-white'/></button>
          </div>
      </div>
  );
};

export default ImageSlider;
"use client"
import Image from "next/image";
// Gallery component
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="w-full "> {/* Set specific width for gallery and map */}
      <div className="md:h-full"> {/* Ensure gallery takes full height on medium screens */}
        <Carousel
          selectedItem={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          infiniteLoop
          autoPlay
          interval={5000}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          swipeable
          stopOnHover
          showArrows
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <div key={index} className="h-full">
              <Image
                width={500}
                height={500}
                src={src}
                alt={`House Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;

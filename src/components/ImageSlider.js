import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="no-image">No Images Available</div>;
  }

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Project" className="slider-img" />
    </div>
  );
};

export default ImageSlider;

import React, { useRef, useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const imgRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(src);
    }, [src]);

  useEffect(()=>{
    console.log("isLoaded",isLoaded);
  },[isLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Shimmer loader until image is fully loaded */}
      {!isLoaded && <div className="shimmer-overlay absolute inset-0 rounded" />}

      {/* Image loads only when visible */}
      {isLoaded && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )} 
    </div>
  );
};

export default LazyImage;

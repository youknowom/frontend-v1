import React, { useEffect, useRef, useState } from 'react';

const PermanentlyBlurredImage = ({ src, alt }) => {
  const [blurredSrc, setBlurredSrc] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    // This is crucial if images are hosted on a different domain (like Firebase/AWS)
    img.crossOrigin = "anonymous"; 
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Set canvas size to match image size
      canvas.width = img.width;
      canvas.height = img.height;

      // Apply the actual pixel blur
      ctx.filter = 'blur(2px)'; 
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Export the blurred pixels as a standalone data string
      const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
      setBlurredSrc(dataUrl);
    };

    img.onerror = () => {
      console.error("Could not load image for blurring. Check CORS settings.");
    };
  }, [src]);

  return (
    <>
      {/* The hidden canvas that does the work */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      {blurredSrc ? (
        <img 
          src={blurredSrc} 
          alt={alt} 
          className="img-fluid mb-3" 
          onContextMenu={(e) => e.preventDefault()} // Extra layer: prevents right-click
        />
      ) : (
        <div className="d-flex justify-content-center py-4">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

// ADD THIS EXPORT STATEMENT
export default PermanentlyBlurredImage;
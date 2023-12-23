import React from 'react';

const Banner = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/C-pP4zMIlY0?autoplay=1&controls=0&mute=1&loop=1&playlist=C-pP4zMIlY0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

  
    </div>
  );
};

export default Banner;
import React from 'react'

const Banner = () => {
  return (
    <div className='min-h-screen relative'>
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      className='absolute top-0 left-0 object-cover w-full h-full'
    >
      <source src='https://player.vimeo.com/external/312894955.sd.mp4?s=9c6638f6a6fa70220ee7b29b63249d7f8ba1fa52&profile_id=164&oauth2_token_id=57447761' />
      Your browser does not support the video tag.
    </video>

    {/* Content Overlaid on Video */}
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-10'>
      <h1 className='text-white text-7xl font-bold max-[600px]:text-4xl'>FyreWrap</h1>
      <p className='text-white w-2/5 text-center text-lg max-[600px]:w-full'>FyreWrap® stands as the premier passive fire protection option for commercial ducts. Its 
Insulfrax core is not only lightweight but also provides superior insulation at high 
temperatures. The core is fully enclosed by a fibreglass reinforced scrim, enhancing its 
durability, tear resistance, and antibacterial properties. The solution is characterized by its 
quick, clean, and straightforward application.</p>
    </div>
  </div>
  )
}

export default Banner

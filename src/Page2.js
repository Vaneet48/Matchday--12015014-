import React from 'react'

const Page2 = () => {
  return (
    <div>
        <div className='mt-4 text-2xl flex justify-center items-center font-bold '>Video Analytics</div>
        <div className='flex items-center'>
        <iframe src='https://www.youtube.com/embed/HucIqi8Lw3E'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        />
        </div>
    </div>
  )
  }
export default Page2;


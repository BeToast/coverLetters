'use client'

import './style.css';

import Image from 'next/image';
import MyPhotoPlace from 'public/myPhotoPlace.svg';
import MyPhoto from 'public/myPhoto.webp';
import $ from "jquery";

import { useEffect, useState } from 'react';

const Photo: React.FC<{
  
}> = ({
  
}) => {
  const width = 400;
  const height = 587;
  const myPhotoSrc = 'public/myPhoto.webp'

  const onLoadHandler = (() => {
    $('#silhouette').addClass('fade-out');
  });

  return(<>
    <div className='relative'>
      <div id='silhouette' className='absolute z-10 w-full h-[full]'>
        <MyPhotoPlace/>
      </div>
        <Image
          className='z-0'
          // className="max-w-[400px] min-w-[200px]"
          width={width}
          height={height}
          src={MyPhoto} 
          alt={''}
          priority={false}
          onLoad={onLoadHandler}
        />
    </div>
  </>);
}

export default Photo;
'use client'

import MyPhotoPlace from 'public/myPhotoPlace.svg';
import MyPhoto from 'public/myPhoto.webp';
import { gtagEvent } from 'lib/googleAnalytics/helpers';

import Image from 'next/image';
import $ from "jquery";


const Photo: React.FC<{
  
}> = ({
  
}) => {
  const width = 400;
  const height = 587;

  const onLoadHandler = (() => {
    $('#silhouette').addClass('fade-out');
    gtagEvent({ action:'loaded', category:'blakePhoto', label:'good' });
  });

  return(<>
    <div className='relative'>
      <div id='silhouette' className='absolute z-10 w-full h-full'>
        <MyPhotoPlace/>
      </div>
        <Image
          className={'z-0 pc:h-['+height+'px]'}
          // className="max-w-[400px] min-w-[200px]"
          width={width}
          src={MyPhoto} 
          alt={''}
          priority={false}
          onLoad={onLoadHandler}
        />
    </div>
  </>);
}

export default Photo;
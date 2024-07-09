'use client'

import {useState, useEffect} from 'react';
import {Photo} from './types'
interface PhotoGridProps{
  photos: Photo[];
}


const PhotoGrid: React.FC<PhotoGridProps> = ({photos}) => {
  const windowWidth = 900;

  const numPhotos = photos.length;

  const columnNum = numPhotos > 4 ? 4 : numPhotos;
  const photoSize = windowWidth / columnNum

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className= "photo"
          style={{ 
            backgroundImage: `url(${photo.src})`,
            width: `${photoSize}px`,
            height: `${photoSize}px`,
          }}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
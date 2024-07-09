'use client'

import Image from 'next/image'
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
          className="photo"
          style={{
            width: `${photoSize}px`,
            height: `${photoSize}px`,
          }}>
          <Image
            src={photo.src}
            alt={`Photo ${photo.id}`}
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;